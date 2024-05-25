// Node modules
import { load } from "cheerio";
import type { CheerioAPI } from "cheerio";

// Project files
import type LinkedInProfile from "../../types/LinkedInProfile";
import getDurationInMonths from "./helpers/getDurationInMonths";
import getImage from "./helpers/getImage";
import getPrimaryJobTitle from "./helpers/getPrimaryJob";
import getText from "./helpers/getText";

export default function pageToProfile(page: string): LinkedInProfile {
  const document: CheerioAPI = load(page);
  const company: string = ".top-card-layout__entity-info--right-column";
  const jobTitle: string = getText(document, "h2.top-card-layout__headline");
  const duration: string = getText(document, "ul.experience__list li .date-range span");

  return {
    candidate_name: getText(document, "h1.top-card-layout__title"),
    candidate_job_title: getPrimaryJobTitle(jobTitle),
    candidate_image_url: getImage(document, ".top-card__profile-image"),
    company_name: getText(document, `${company} span`),
    company_duration_in_months: getDurationInMonths(duration),
    company_image_url: getImage(document, `${company} img`),
  };
}
