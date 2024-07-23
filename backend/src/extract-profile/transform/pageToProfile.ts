// Node modules
import { load } from "cheerio";
import type { CheerioAPI } from "cheerio";

// Project files
import type LinkedInProfile from "../../types/LinkedInProfile";
import verifyImage from "./profile/verifyImage";
import getJobDuration from "./profile/getJobDuration";
import jobDurationToMonths from "./profile/jobDurationToMonths";
import trimText from "./helpers/trimText";

export default function pageToProfile(page: string): LinkedInProfile {
  // HTML pages
  const document: CheerioAPI = load(page);
  const experienceScope: string = document("#experience").parent().find("li").html() || "";
  const experienceDocument: CheerioAPI = load(experienceScope);

  // CSS Tags
  const cssCandidateImage = ".EntityPhoto-circle-9 > img";
  const cssJobTitle = "div.display-flex.align-items-center.mr1.t-bold > span[aria-hidden='true']";
  const cssCompanyName = "span.t-14.t-normal:first > span[aria-hidden='true']";
  const cssJobDuration = "span.t-14.t-normal.t-black--light:first > span[aria-hidden='true']";

  // Helpers
  const removeTypeOfJob: RegExp = / · .*/; // Novare · Full time = Novare. ACdelco · Contract = ACdelco, etc.
  const maximumDatabaseSize = 9999;

  // Extra transformations
  // -- 1. Candidate name
  const unparsedCandidateName = document("h1").text();
  const candidateName = trimText(unparsedCandidateName, maximumDatabaseSize);
  // -- 2. Candidate job title
  const unparsedJobTitle = experienceDocument(cssJobTitle).text();
  const candidateJobTitle = trimText(unparsedJobTitle, maximumDatabaseSize);
  // -- 3. Candidate image url
  const unparsedCandidateImage = document(cssCandidateImage).attr("src");
  const verifiedCandidateImage = verifyImage(unparsedCandidateImage);
  // -- 4. Company name
  const unparsedCompanyName = experienceDocument(cssCompanyName).text().replace(removeTypeOfJob, "");
  const companyName = trimText(unparsedCompanyName, maximumDatabaseSize);
  // -- 5. Job duration in months
  const jobDurationFullText = experienceDocument(cssJobDuration).text();
  const jobDurationTrimmedText = getJobDuration(jobDurationFullText);
  const jobDurationInMonths: number = jobDurationToMonths(jobDurationTrimmedText);
  // -- 6. Company image url
  const unverifiedCompanyImage = experienceDocument("img").attr("src");
  const verifiedCompanyImage = verifyImage(unverifiedCompanyImage);

  return {
    candidate_name: candidateName,
    candidate_job_title: candidateJobTitle,
    candidate_image_url: verifiedCandidateImage,
    company_name: companyName,
    company_duration_in_months: jobDurationInMonths,
    company_image_url: verifiedCompanyImage,
  };
}
