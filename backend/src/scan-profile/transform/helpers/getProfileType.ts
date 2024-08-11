// Node modules
import { CheerioAPI } from "cheerio";

/** See if we can detect if is profile #1 or profile #2 based on a unique tag found on profile #2 */
export default function getProfileType(document: CheerioAPI): number {
  const htmlTag = "a";
  const dataAttribute = "[data-field='experience_company_logo']";
  const cssSelector = ".full-width";
  const uniqueProfile2Tag = document(htmlTag + dataAttribute + cssSelector).html();
  const result = !uniqueProfile2Tag ? 1 : 2;

  return result;
}
