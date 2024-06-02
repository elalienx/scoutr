// Project files
import type ReportLog from "../../types/ReportLog";
import type LinkedInProfile from "../../types/LinkedInProfile";
import ReportSeverity from "../../types/ReportSeverity";
import checkPrivateProfile from "./checkPrivateProfile";
import checkEmptyFields from "./checkEmptyFields";

export default function generateReport(url: string, page: string, profile: LinkedInProfile): ReportLog {
  const { MISSING_ALL_FIELDS } = ReportSeverity;

  let report = checkEmptyFields(url, profile);

  if (report.severity === MISSING_ALL_FIELDS) report = checkPrivateProfile(report, page); // checkPrivateProfile can be a boolean

  return report;
}
