// Node modules
import type { Client } from "pg";

// Project files
import candidateQuery from "../queries/insertCandidate";
import reportQuery from "../queries/insertErrorLog";
import type ErrorReport from "../types/ErrorReport";
import extractPage from "./extract/extractPage";
import pageToProfile from "./transform/pageToProfile";
import reportEmptyFields from "./transform/reportEmptyFields";
import reportPrivateProfile from "./transform/reportPrivateProfile";

export default async function etlProcess(url: string, assignment_id: number, database: Client) {
  // Extract
  const page = await extractPage(url);

  // Transform
  const profile = pageToProfile(page);
  let report = reportEmptyFields(url, profile);

  if (report.severity === 2) report = reportPrivateProfile(url, page);


  
  // Load
  let candidate = {};
  const profileAsArray = [assignment_id, url, ...Object.values(profile)];
  const reportAsArray = Object.values(report);

  if (report.severity < 2) candidate = (await database.query(candidateQuery, profileAsArray)).rows[0];
  if (report.severity) await database.query(reportQuery, reportAsArray);

  return { candidate, report };
}
