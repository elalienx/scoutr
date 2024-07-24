// Node modules
import type { Client } from "pg";
import { Page } from "playwright";

// Project files
import candidateQuery from "../queries/insertCandidate";
import reportQuery from "../queries/insertErrorLog";
import extractPage from "./extract/extractPage";
import pageToProfile from "./transform/pageToProfile";
import checkEmptyFields from "./transform/checkEmptyFields";

export default async function etlProcess(url: string, assignment_id: number, database: Client, browserPage: Page) {
  // Extract
  const page = await extractPage(browserPage, url);

  // Transform
  const profile = pageToProfile(page);
  const report = checkEmptyFields(url, profile);
  const profileAsArray = [assignment_id, url, ...Object.values(profile)];
  const reportAsArray = Object.values(report);

  // Load
  /** Extract this, so its wrapped up on a try/catch so it can return a nice error message */
  let candidate = {};

  if (report.severity < 2) candidate = (await database.query(candidateQuery, profileAsArray)).rows[0];
  if (report.severity) await database.query(reportQuery, reportAsArray);

  return { candidate, report };
}
