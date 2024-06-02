// Node modules
import { load } from "cheerio";
import type { CheerioAPI } from "cheerio";

// Project file
import type ReportLog from "../../types/ReportLog";
import ReportSeverity from "../../types/ReportSeverity";
import getText from "./helpers/getText";

export default function checkBan(report: ReportLog, page: string): ReportLog {
  const { TEMPORAL_BAN } = ReportSeverity;

  const document: CheerioAPI = load(page);
  const cssClass = ".page-not-found__subheadline";
  const text = getText(document, cssClass);
  let result = report;

  if (text) result = { url: report.url, severity: TEMPORAL_BAN, message: "Temporally suspended" };

  return result;
}
