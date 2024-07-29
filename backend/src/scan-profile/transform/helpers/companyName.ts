// Node modules
import { CheerioAPI } from "cheerio";

// Project files
import trimText from "../helpers/trimText";

export default function companyName(document: CheerioAPI, profileType: number, trimSize: number): string {
  const removeTypeOfJob: RegExp = / · .*/; // Novare · Full time = Novare. ACdelco · Contract = ACdelco, etc.
  const parentTag1 = "span.t-14.t-normal";
  const parentTag2 = "div.display-flex.align-items-center.mr1.t-bold";
  const childTag = "span[aria-hidden='true']";
  const parentTag = profileType === 1 ? parentTag1 : parentTag2;
  const htmlText = document(`${parentTag} > ${childTag}`).first().text().replace(removeTypeOfJob, "");
  const result = trimText(htmlText, trimSize);

  return result;
}
