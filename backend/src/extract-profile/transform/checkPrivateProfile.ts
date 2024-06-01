// Node modules
import { load } from "cheerio";
import type { CheerioAPI } from "cheerio";

// Project files
import type ErrorReport from "../../types/ErrorReport";
import getText from "./helpers/getText";

export default function checkPrivateProfile(report: ErrorReport, page: string): ErrorReport {
  let result = report;
  const document: CheerioAPI = load(page);
  const privateMessage = getText(document, "some-css-tag");

  if (privateMessage) result = { url: report.url, message: "Private profile", severity: 3 };

  return result;
}
