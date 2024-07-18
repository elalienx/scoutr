// Node modules
import type { Client } from "pg";
import { Page } from "playwright";

// Project files
import candidateQuery from "../queries/insertCandidate";
import reportQuery from "../queries/insertErrorLog";
import extractPage from "./extract/extractPage";
import pageToProfile from "./transform/pageToProfile";
import generateReport from "./transform/generateReport";

export default async function etlProcess(url: string, assignment_id: number, database: Client, browserPage: Page) {
  // Extract
  console.time("extractPage");
  const page = await extractPage(browserPage, url);
  console.timeLog("extractPage");

  // Transform
  const profile = pageToProfile(page);
  const report = generateReport(url, page, profile);
  const profileAsArray = [assignment_id, url, ...Object.values(profile)];
  const reportAsArray = Object.values(report);

  // Load
  let candidate = {};

  if (report.severity < 2) candidate = (await database.query(candidateQuery, profileAsArray)).rows[0];
  if (report.severity) await database.query(reportQuery, reportAsArray);

  return { candidate, report };
}
