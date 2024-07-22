// Node modules
import { load } from "cheerio";
import type { CheerioAPI } from "cheerio";

// Project files
import type LinkedInProfile from "../../types/LinkedInProfile";
import verifyImage from "./profile/verifyImage";
import getJobDuration from "./profile/getJobDuration";
import jobDurationToMonths from "./profile/jobDurationToMonths";

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
  // -- Candidate image
  const unverifiedCandidateImage = document(candidateImage).attr("src");
  const verifiedCandidateImage = verifyImage(unverifiedCandidateImage);
  // -- Company name
  const removeTypeOfJob: RegExp = / · .*/; // Novare · Full time = Novare. ACdelco · Contract = ACdelco, etc.
  // -- Job duration
  const jobDurationFullText = experienceDocument(jobDuration).text();
  const jobDurationShortText = getJobDuration(jobDurationFullText);
  const jobDurationInMonths = jobDurationToMonths(jobDurationShortText);
  // -- Company image
  const unverifiedCompanyImage = experienceDocument("img").attr("src");
  const verifiedCompanyImage = verifyImage(unverifiedCompanyImage);

  return {
    candidate_name: document("h1").text(),
    candidate_job_title: experienceDocument(jobTitle).text(),
    candidate_image_url: verifiedCandidateImage,
    company_name: experienceDocument(companyName).text().replace(removeTypeOfJob, ""),
    company_duration_in_months: jobDurationInMonths,
    company_image_url: verifiedCompanyImage,
  };
}
