// Project files
import type ReportLog from "../../types/ReportLog";
import type LinkedInProfile from "../../types/LinkedInProfile";
import ReportSeverity from "../../types/ReportSeverity";
import checkBan from "./report/checkBan";
import checkEmptyFields from "./report/checkEmptyFields";
import checkPrivateProfile from "./report/checkPrivateProfile";

export default function generateReport(url: string, page: string, profile: LinkedInProfile): ReportLog {
  const { MISSING_ALL_FIELDS } = ReportSeverity;

  let report = checkEmptyFields(url, profile);

  // these checkSomething can be booleans
  if (report.severity === MISSING_ALL_FIELDS) report = checkPrivateProfile(report, page);
  if (report.severity === MISSING_ALL_FIELDS) report = checkBan(report, page);

  return report;
}
