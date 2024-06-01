// Project files
import type ErrorReport from "../../types/ErrorReport";
import type LinkedInProfile from "../../types/LinkedInProfile";
import reportEmptyFields from "./reportEmptyFields";

export default function generateReport(url: string, page: string, profile: LinkedInProfile): ErrorReport {
  let report = reportEmptyFields(url, profile); // rename method to checkEmptyFields

  if (report.severity === 2) report = checkPrivateProfile(report, url, page);

  return report;
}
