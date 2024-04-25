// Node modules
import { Client } from "pg";

// Project files
import candidateQuery from "../queries/insertCandidate";
import errorQuery from "../queries/insertErrorLog";
import extractPage from "./extract/extractPage";
import pageToProfile from "./transform/pageToProfile";
import reportEmptyFields from "./transform/reportEmptyFields";

export default async function etlProcess(url: string, assignment_id: number, database: Client) {
  // Extract
  const page = await extractPage(url);

  // Transform
  const profile = pageToProfile(page);
  const report = reportEmptyFields(url, profile);

  const profileAsArray = [assignment_id, url, ...Object.values(profile)];
  const reportAsArray = Object.values(report);

  // Load
  let candidate = {};

  if (report.severity < 2) candidate = (await database.query(candidateQuery, profileAsArray)).rows[0];
  if (report.severity) await database.query(errorQuery, reportAsArray);

  return { candidate, report };
}