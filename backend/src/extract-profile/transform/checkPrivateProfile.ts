// Node modules
import { load } from "cheerio";
import type { CheerioAPI } from "cheerio";

// Project files
import type ErrorReport from "../../types/ErrorReport";
import getText from "./helpers/getText";

export default function checkPrivateProfile(report: ErrorReport, page: string): ErrorReport {
  let result = report;
  const document: CheerioAPI = load(page);
  const privateMessage = getText(document, ".page-not-found__subheadline");

  if (privateMessage) result = { url: report.url, severity: 3, message: "Private profile" };
  console.log("result", result);

  return result;
}
