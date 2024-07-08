// Node modules
import { load } from "cheerio";
import type { CheerioAPI } from "cheerio";

// Project files
import type LinkedInProfile from "../../types/LinkedInProfile";

export default function pageToProfile(page: string): LinkedInProfile {
  const document: CheerioAPI = load(page);

  const experience = document("#experience").parent().html();
  const documentExperience = load(experience);
  const container = documentExperience(".xiDmfLWqcHAcVUVmKmTdTsLRIMszMNQbKJXE li").first().find("div").first().html();
  const documentContainer = load(container);
  const orange = documentContainer("div").first().html();
  const orangeDocument = load(orange);
  const purple = documentContainer(".align-self-center").first().find(".flex-row").first().html().replace(/\n/g, "");
  const purpleDocument = load(purple);

  return {
    candidate_name: document("h1").text(),
    candidate_image_url: document(".EntityPhoto-circle-9 > img").attr("src"),
    company_name: purpleDocument('div.display-flex.align-items-center.mr1.t-bold > span[aria-hidden="true"]').text(),
    candidate_job_title: purpleDocument('span.t-14.t-normal:first > span[aria-hidden="true"]').text(),
    company_duration_in_months: 0,
    company_image_url: orangeDocument("img").attr("src"),
  };
}
