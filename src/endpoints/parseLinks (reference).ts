// @ts-nocheck
// Node modules
import { Request, Response } from "express";
import { Client } from "pg";

// Project files
import extractPage from "../extract/extractPage";
import pageToProfile from "../transform/pageToProfile";
import { insertCandidate } from "../sql-queries/insertCandidate";

export default async function parseLinkedInLinks(request: Request, response: Response, database: Client) {
  const { assignment_id } = request.params;
  const { links } = request.body;

  async function ETLProcess(url: string) {
    // Extract
    const page: string = await extractPage(url);

    // Transform
    const profile: object = pageToProfile(page);
    const candidate: Candidate = profileToCandidate({ ...profile, url, assignment_id });
    const report = reportEmptyFields(profile);
    const simplifiedReport = simplifyReport(report);

    // Load
    const storedCandidate = store(database, candidateQuery, candidate);
    report && store(database, errorReportQuery, report);

    return { storedCandidate, simplifiedReport };
  }

  try {
    const etlProcess = await links.map((item: string) => ETLProcess(item));
    const result = packageResults(etlProcess);

    response.status(200).send(result);
  } catch (error) {
    console.error(error);
    response.sendStatus(500);
  }
}
