// Node modules
import { load as CheerioLoad, CheerioAPI } from "cheerio";

// Project files
import getText from "./helpers/getText";
import getImage from "./helpers/getImage";
import getDurationInMonths from "./helpers/getDurationInMonths";
import getPrimaryJob from "./helpers/getPrimaryJob";

export default function transformProfile(page: string): object {
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
