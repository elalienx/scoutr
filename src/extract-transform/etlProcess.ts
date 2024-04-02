// Node modules
import { Client } from "pg";

// Project files
import candidateQuery from "../sql-queries/insertCandidate";
import errorQuery from "../sql-queries/insertErrorLog";
import extractPage from "./extract/extractPage";
import pageToProfile from "./transform/pageToProfile";
import profileToCandidate from "./transform/profileToCandidate";
import reportEmptyFields from "./reports/reportEmptyFields";

export default async function etlProcess(url: string, assignment_id: number, database: Client) {
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
  if (report.severity) await database.query(errorQuery, reportArray);

  return [rows[0], report];
}
