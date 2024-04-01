// Node modules
import { Request, Response } from "express";
import { Client } from "pg";

// Project files
import extractPage from "../extract/extractPage";
import pageToProfile from "../transform/pageToProfile";
import candidateQuery from "../sql-queries/insertCandidate";
import errorQuery from "../sql-queries/insertErrorLog";
import profileToCandidate from "../transform/profileToCandidate";
import reportEmptyFields from "../reports/reportEmptyFields";
import packageResults from "../package-results/packageResults";

export default async function parseLinks(request: Request, response: Response, database: Client) {
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
    /** 🚨 REFACTOR: Do not store if severity == 2 (candidate was not parsed) */
    const { rows } = await database.query(candidateQuery, candidate as unknown[]);
    if (report.error_severity) await database.query(errorQuery, reportArray);

    return [rows[0], report];
  }

  try {
    const [candidateRows, report] = await Promise.all(links.map((link: string) => ETLProcess(link)));
    const results = packageResults(candidateRows, report);

    response.status(200).send(results);
  } catch (error) {
    console.error(error);
    response.sendStatus(500);
  }
}
