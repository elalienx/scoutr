// Node modules
import type { Client } from "pg";
import { Page } from "playwright";

// Project files
import extractPage from "./extract/extractPage.ts";
import pageToProfile from "./transform/pageToProfile.ts";
import checkEmptyFields from "./transform/checkEmptyFields.ts";
import saveAndReturnCandidate from "./load/saveCandidate.ts";
import saveReport from "./load/saveReport.ts"; 

export default async function etlProcess(url: string, assignment_id: number, database: Client, browserPage: Page) {
  // Extract
  const page = await extractPage(browserPage, url);

  // Transform
  const profile = pageToProfile(page);
  const report = checkEmptyFields(url, profile);
  const profileAsArray = [assignment_id, url, ...Object.values(profile)];
  const reportAsArray = Object.values(report);

  // Load
  let candidate = {};

  if (report.severity < 2) candidate = await saveAndReturnCandidate(database, profileAsArray);
  if (report.severity) await saveReport(database, reportAsArray);

  return { candidate, report };
}
