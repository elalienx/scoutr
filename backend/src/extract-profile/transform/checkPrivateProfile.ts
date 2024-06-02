// Node modules
import { load } from "cheerio";
import type { CheerioAPI } from "cheerio";

// Project files
import type ReportLog from "../../types/ReportLog";
import ReportSeverity from "../../types/ReportSeverity";
import getText from "./helpers/getText";

export default function checkPrivateProfile(report: ReportLog, page: string): ReportLog {
  const { PRIVATE_PROFILE } = ReportSeverity;

  let result = report;
  const document: CheerioAPI = load(page);
  const privateMessage = getText(document, ".page-not-found__subheadline");

  if (privateMessage) result = { url: report.url, severity: PRIVATE_PROFILE, message: "Private profile" };

  return result;
}
