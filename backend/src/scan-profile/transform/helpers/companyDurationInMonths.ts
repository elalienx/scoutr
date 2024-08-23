// Node modules
import { CheerioAPI } from "cheerio";

// Project files
import extractJobDuration from "./extractJobDuration";
import convertJobDurationToMonths from "./convertJobDurationToMonths";

export default function companyDurationInMonths(document: CheerioAPI, profileType: number): number {
  const parentTag = "span.t-14.t-normal";
  const childTag = "span[aria-hidden='true']";
  const htmlText1 = document(`${parentTag} > ${childTag}`).text(); // if we put first() on the profile type 1 it breaks
  const htmlText2 = document(`${parentTag} > ${childTag}`).first().text(); // to only bring the first job duration found otherwise it will return the other job durations in the same string messing up the math in the next step.
  const htmlText = profileType === 1 ? htmlText1 : htmlText2;
  const jobDurationTrimmedText = extractJobDuration(htmlText);
  const result = convertJobDurationToMonths(jobDurationTrimmedText);

  return result;
}
