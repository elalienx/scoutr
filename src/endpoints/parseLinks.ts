// Node modules
import { Request, Response } from "express";
import { Client } from "pg";

// Project files
import extractPage from "../extract/extractPage";
import pageToProfile from "../transform/pageToProfile";
import { insertCandidate } from "../sql-queries/insertCandidate";
import { insertErrorLog } from "../sql-queries/insertErrorLog";
import profileToCandidate from "../transform/profileToCandidate";
import reportEmptyFields from "../reports/reportEmptyFields";

export default async function parseLinkedInLinks(request: Request, response: Response, database: Client) {
  const { assignment_id } = request.params;
  const { links } = request.body;

  async function ETLProcess(url: string) {
    // Extract
    const page = await extractPage(url);

    // Transform
    const profile = pageToProfile(page);
    const candidate = profileToCandidate(profile, { assignment_id, url });
    const report = reportEmptyFields(url, profile);
    const reportArray = Object.values(report);

    // Load
    const { rows } = await database.query(insertCandidate, candidate as unknown[]);
    if (report.error_severity > 0) {
      console.log(`Adding ${report.linked_in_url} to the ErrorLog table`);
      await database.query(insertErrorLog, reportArray);
    }

    return rows[0];
  }

  try {
    const rows = await Promise.all(links.map((link: string) => ETLProcess(link)));

    response.status(200).send(rows);
  } catch (error) {
    console.error(error);
    response.sendStatus(500);
  }
}
