// Node modules
import { CheerioAPI } from "cheerio";

// Project files
import trimText from "./trimText";

export default function candidateName(document: CheerioAPI, trimSize: number): string {
  const htmlText = document("h1").text();
  const result = trimText(htmlText, trimSize);

  return result;
}
