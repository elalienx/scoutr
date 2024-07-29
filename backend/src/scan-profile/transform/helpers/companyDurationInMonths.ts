// Node modules
import { CheerioAPI } from "cheerio";

// Project files
import extractJobDuration from "./extractJobDuration";
import convertJobDurationToMonths from "./converJobDurationToMonths";

export default function companyDurationInMonths(document: CheerioAPI, profileType: number): number {
  const parentTag1 = "span.t-14.t-normal.t-black--light";
  const parentTag2 = `div.pvs-entity__sub-components ${parentTag1}`;
  const childTag = "span[aria-hidden='true']";
  const parentTag = profileType === 1 ? parentTag1 : parentTag2;
  const htmlText = document(`${parentTag} > ${childTag}`).text();
  const jobDurationTrimmedText = extractJobDuration(htmlText);
  const result = convertJobDurationToMonths(jobDurationTrimmedText);

  return result;
}
