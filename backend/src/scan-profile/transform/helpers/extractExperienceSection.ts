// Node modules
import { CheerioAPI, load } from "cheerio";

/**
 * Overview:
 * This method is designed to extract the experience section from a LinkedIn profile for two key reasons:
 *
 * 1. Performance: Instead of passing the entire LinkedIn profile to the methods that process the #experience section,
 *    we optimize performance by only handling the relevant HTML nodes. This avoids unnecessary processing of the full document.
 *
 * 2. Accuracy: LinkedIn's inconsistent CSS naming conventions can cause false positives as other profile sections share similar tags.
 *    By isolating the #experience section, we reduce the risk of extracting incorrect data that might match the same CSS selectors elsewhere on the page.
 *    Case in point, the method getProfileType() throws false positives on my profile https://www.linkedin.com/in/eduardo-alvarez-nowak/
 *    If we dont extract the #experience section beforehand.
 */
export default function extractExperienceSection(document: CheerioAPI): CheerioAPI {
  const htmlText: string = document("#experience").parent().find("li").first().html() || "";
  const result: CheerioAPI = load(htmlText);

  return result;
}
