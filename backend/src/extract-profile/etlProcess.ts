// Node modules
import type { Client } from "pg";

// Project files
import candidateQuery from "../queries/insertCandidate";
import reportQuery from "../queries/insertErrorLog";
import extractPage from "./extract/extractPage";
import pageToProfile from "./transform/pageToProfile";
import reportEmptyFields from "./transform/reportEmptyFields";

export default async function etlProcess(url: string, assignment_id: number, database: Client) {
  // Extract
  const page = await extractPage(url);

  // Transform
  const profile = pageToProfile(page); // searches for these keys in the page: candidate_name, candidate_job_title, etc.
  const report = reportEmptyFields(url, profile); // rename to reportEmptyFields to denote that it only takes care of checking for missing keys
  // const reportPrivateProfile = reportPrivate(page) // searches for this text in the page: "The LinkedIn profile you’re looking for isn’t public or doesn’t exist."
  // const reportTemporalBan = reportBan(page) // searches for either of these text in the page: "Welcome to your professional community" | "Join LinkedIn"
  const profileAsArray = [assignment_id, url, ...Object.values(profile)];
  const reportAsArray = Object.values(report);

  // Load
  let candidate = {};

  if (report.severity < 2) candidate = (await database.query(candidateQuery, profileAsArray)).rows[0];
  if (report.severity) await database.query(reportQuery, reportAsArray);

  return { candidate, report };
}
