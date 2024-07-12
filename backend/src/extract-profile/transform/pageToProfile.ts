// Node modules
import { load } from "cheerio";
import type { CheerioAPI } from "cheerio";

// Project files
import type LinkedInProfile from "../../types/LinkedInProfile";
import jobDurationToMonths from "./helpers/jobDurationToMonths";
import getJobDuration from "./helpers/getJobDuration";
import verifyProfileImage from "./helpers/verifyProfileImage";

export default function pageToProfile(page: string): LinkedInProfile {
  // HTML pages
  const document: CheerioAPI = load(page);
  const experienceScope: string = document("#experience").parent().find("li").html() || "";
  const experienceDocument: CheerioAPI = load(experienceScope);

  // CSS Tags
  const candidateImage = ".EntityPhoto-circle-9 > img";
  const jobTitle = "div.display-flex.align-items-center.mr1.t-bold > span[aria-hidden='true']";
  const companyName = "span.t-14.t-normal:first > span[aria-hidden='true']";
  const jobDuration = "span.t-14.t-normal.t-black--light:first > span[aria-hidden='true']";

  // Extra transformations
  const unverifiedCandidateImage = document(candidateImage).attr("src");
  const verifiedCandidateImage = verifyProfileImage(unverifiedCandidateImage);
  const jobDurationFullText = experienceDocument(jobDuration).text();
  const jobDurationShortText = getJobDuration(jobDurationFullText);
  const jobDurationInMonths = jobDurationToMonths(jobDurationShortText);
  const unverifiedCompanyImage = experienceDocument("img").attr("src");
  const verifiedCompanyImage = verifyProfileImage(unverifiedCompanyImage);

  return {
    candidate_name: document("h1").text(),
    candidate_job_title: experienceDocument(jobTitle).text(),
    candidate_image_url: verifiedCandidateImage,
    company_name: experienceDocument(companyName).text().replace(" · Full-time", ""),
    company_duration_in_months: jobDurationInMonths,
    company_image_url: verifiedCompanyImage,
  };
}
