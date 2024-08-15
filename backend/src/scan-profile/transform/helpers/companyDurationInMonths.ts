// Node modules
import { CheerioAPI } from "cheerio";

// Project files
import extractJobDuration from "./extractJobDuration";
import convertJobDurationToMonths from "./converJobDurationToMonths";

export default function companyDurationInMonths(document: CheerioAPI): number {
  const parentTag = "span.t-14.t-normal";
  const childTag = "span[aria-hidden='true']";
  const htmlText = document(`${parentTag} > ${childTag}`).text();
  const jobDurationTrimmedText = extractJobDuration(htmlText);
  const result = convertJobDurationToMonths(jobDurationTrimmedText);

  return result;
}
