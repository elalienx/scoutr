// Node modules
import { load, CheerioAPI } from "cheerio";

// Project files
import candidateImageURL from "./profile-fields/candidateImageURL";
import companyDurationInMonths from "./profile-fields/companyDurationInMonths";
import companyName from "./profile-fields/companyName";
import getCandidateJobTitle from "./profile-fields/candidateJobTitle";
import getCandidateName from "./profile-fields/candidateName";
import getCompanyImageURL from "./profile-fields/companyImageURL";
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
