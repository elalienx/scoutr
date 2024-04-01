// Node modules
import { load as CheerioLoad, CheerioAPI } from "cheerio";

// Project files
import LinkedInProfile from "../../types/LinkedInProfile";
import getDurationInMonths from "./helpers/getDurationInMonths";
import getImage from "./helpers/getImage";
import getPrimaryJob from "./helpers/getPrimaryJob";
import getText from "./helpers/getText";

export default function pageToProfile(page: string): LinkedInProfile {
  const document: CheerioAPI = CheerioLoad(page);
  const company: string = ".top-card-layout__entity-info--right-column";
  const longJobTitle: string = getText(document, "h2.top-card-layout__headline");
  const longDuration: string = getText(document, "ul.experience__list li .date-range span");

  return {
    candidate_name: getText(document, "h1"),
    candidate_job_title: getPrimaryJob(longJobTitle),
    candidate_image_url: getImage(document, ".top-card__profile-image"),
    company_name: getText(document, `${company} span`),
    company_duration_in_months: getDurationInMonths(longDuration),
    company_image_url: getImage(document, `${company} img`),
  };
}
