// Node modules
import type { CheerioAPI } from "cheerio";

export default function getText(document: CheerioAPI, selector: string): string {
  return document(selector).first().text().trim();
}
