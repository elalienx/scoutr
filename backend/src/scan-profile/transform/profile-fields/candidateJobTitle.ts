// Node modules
import { CheerioAPI } from "cheerio";

// Project files
import trimText from "../helpers/trimText";

export default function candidateJobTitle(document: CheerioAPI, profileType: number, trimSize: number): string {
  const parentTag1 = "div.display-flex.align-items-center.mr1.t-bold";
  const parentTag2 = `div.pvs-entity__sub-components ${parentTag1}`; // its a similar HTML but comes from the parent "pvs-entity"
  const childTag = "span[aria-hidden='true']";
  const parentTag = profileType === 1 ? parentTag1 : parentTag2;
  const htmlText = document(`${parentTag} > ${childTag}`).first().text();
  const result = trimText(htmlText, trimSize);

  return result;
}
