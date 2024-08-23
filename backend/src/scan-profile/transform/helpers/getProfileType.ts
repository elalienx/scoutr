// Node modules
import { CheerioAPI } from "cheerio";

export default function getProfileType(document: CheerioAPI): number {
  const htmlTag = "a";
  const dataAttribute = "[data-field='experience_company_logo']";
  const cssSelector = ".full-width";
  const uniqueProfile2Tag = document(htmlTag + dataAttribute + cssSelector).html();
  const result = !uniqueProfile2Tag ? 1 : 2;

  return result;
}
