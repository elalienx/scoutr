// Project files
import formatDate from "scripts/dates/formatDate";
import Candidate from "types/Candidate";
import { contactData, relevanceData } from "./meta-data";

export default function parseData(item: Candidate, index: number) {
  const header = {
    id: index,
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
  const relevance = {
    color: relevanceData[item.relevance | 0].color,
    value: item.relevance,
    title: relevanceData[item.relevance | 0].label,
    subtitle: "",
  };
  const contact = {
    color: contactData[item.contact_status].color,
    value: item.contact_status,
    title: contactData[item.contact_status].label,
    subtitle: formatDate(item.contact_date),
  };

  return { header, candidate, company, relevance, contact };
}
