// Node modules
import type { CheerioAPI } from "cheerio";

export default function getImage(document: CheerioAPI, selector: string): string {
  const placeholderURL = "https://static.licdn.com/";
  let imageURL = document(selector).attr("src") || "";

  // safeguard
  if (imageURL.startsWith(placeholderURL)) imageURL = "";

  return imageURL;
}
