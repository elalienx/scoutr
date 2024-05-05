// Project files
import formatDate from "scripts/formatDate";
import Candidate from "types/Candidate";
import { contactColors, contactTitle } from "./meta-data";
import { relevanceColors, relevancetitle } from "./meta-data";

export default function parseData(item: Candidate) {
  const header = {
    id: item.id,
    candidate_image_url: item.candidate_image_url,
    company_image_url: item.company_image_url,
  };
  const candidate = {
    candidate_image_url: item.candidate_image_url,
    candidate_name: item.candidate_name,
    candidate_job_title: item.candidate_job_title,
    linked_in_url: item.linked_in_url,
  };
  const company = {
    company_image_url: item.company_image_url,
    company_name: item.company_name,
    company_duration_in_months: item.company_duration_in_months,
  };
  const relevanceBadge = {
    color: relevanceColors(item.relevance),
    value: item.relevance,
    title: relevancetitle(item.relevance),
    subtitle: "",
  };
  const contactBadge = {
    color: contactColors(item.contact_status),
    value: item.contact_status,
    title: contactTitle(item.contact_status),
    subtitle: formatDate(item.contact_date),
  };

  return { header, candidate, company, relevanceBadge, contactBadge };
}
