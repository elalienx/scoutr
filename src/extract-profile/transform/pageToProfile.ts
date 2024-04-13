// Node modules
import { load as CheerioLoad, CheerioAPI } from "cheerio";

// Project files
import LinkedInProfile from "../../types/LinkedInProfile";
import getDurationInMonths from "./helpers/getDurationInMonths";
import getText from "./helpers/getText";
import getImage from "./helpers/getImage";
import getPrimaryJobTitle from "./helpers/getPrimaryJob";

export default function pageToProfile(page: string): LinkedInProfile {
  const document: CheerioAPI = CheerioLoad(page);
  const css_candidate_name = "h1.top-card-layout__title";
  const css_job_title = "h2.top-card-layout__headline";
  const css_candidate_image = ".top-card__profile-image";
  const css_company = ".top-card-layout__entity-info--right-column";
  const css_duration = "ul.experience__list li .date-range span";
  const jobTitle: string = getText(document, css_job_title);
  const duration: string = getText(document, css_duration);

  return {
    candidate_name: getText(document, css_candidate_name),
    candidate_job_title: getPrimaryJobTitle(jobTitle),
    candidate_image_url: getImage(document, css_candidate_image),
    company_name: getText(document, `${css_company} span`),
    company_duration_in_months: getDurationInMonths(duration),
    company_image_url: getImage(document, `${css_company} img`),
  };
}
