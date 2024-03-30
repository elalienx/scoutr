// Node modules
import * as cheerio from "cheerio";

// Project files
import getText from "./template-linked-in/getText";
import getImage from "./template-linked-in/getImage";
import getDurationInMonths from "./template-linked-in/getDurationInMonths";

export default function templateLinkedIn(page: string): object {
  const document = cheerio.load(page);
  const company = ".top-card-layout__entity-info--right-column";
  const duration = getText(document, "ul.experience__list li .date-range span");

  return {
    candidate_name: getText(document, "h1"),
    candidate_title: getText(document, "h2.top-card-layout__headline"),
    candidate_image_url: getImage(document, ".top-card__profile-image"),
    company_name: getText(document, `${company} span`),
    company_duration_in_months: getDurationInMonths(duration),
    company_image_url: getImage(document, `${company} img`),
  };
}
