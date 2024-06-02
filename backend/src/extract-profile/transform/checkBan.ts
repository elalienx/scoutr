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
  const htmlHeadTag = `meta[http-equiv="refresh"][content="1;url=https://www.linkedin.com"]`;
  const hasHTMLHeadTag = document(htmlHeadTag);
  let result = report;

  if (hasHTMLHeadTag.length) result = { url: report.url, severity: TEMPORAL_BAN, message: "Temporally suspended" };

  return result;
}
