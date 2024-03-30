// Node modules
import { CheerioAPI } from "cheerio";

export default function getText(document: CheerioAPI, selector: string): string {
  return document(selector).first().text().trim().substring(0, 50);
}
