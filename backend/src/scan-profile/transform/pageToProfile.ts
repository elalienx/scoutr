// Node modules
import { load, CheerioAPI } from "cheerio";

// Project files
import candidateImageURL from "./helpers/candidateImageURL";
import companyDurationInMonths from "./helpers/companyDurationInMonths";
import companyName from "./helpers/companyName";
import getCandidateJobTitle from "./helpers/candidateJobTitle";
import getCandidateName from "./helpers/candidateName";
import getCompanyImageURL from "./helpers/companyImageURL";
import getProfileType from "./helpers/getProfileType";

export default function pageToProfile(page: string) {
  const document: CheerioAPI = load(page);
  const experienceScope = document("#experience").parent().find("li").html() || "";
  const experienceDocument: CheerioAPI = load(experienceScope);
  const profileType = getProfileType(experienceDocument);
  const databaseColumnSize = 50;

  return {
    candidate_name: getCandidateName(document, databaseColumnSize),
    candidate_job_title: getCandidateJobTitle(experienceDocument, profileType, databaseColumnSize),
    candidate_image_url: candidateImageURL(document),
    company_name: companyName(experienceDocument, profileType, databaseColumnSize),
    company_duration_in_months: companyDurationInMonths(experienceDocument, profileType),
    company_image_url: getCompanyImageURL(experienceDocument),
  };
}
