// Project files
import formatDate from "scripts/dates/formatDate";
import Candidate from "types/Candidate";
import { contactData, relevanceData } from "./meta-data";

export default function parseData(item: Candidate, index: number) {
  const header = {
    index: index,
    candidate_image_url: item.candidate_image_url,
    company_image_url: item.company_image_url,
  };
  const relevance = {
    color: relevanceData[item.relevance | 0].color,
    value: item.relevance,
    title: relevanceData[item.relevance | 0].label,
    subtitle: "",
  };
  const contact = {
    color: contactData[item.contact_status | 0].color,
    value: item.contact_status,
    title: contactData[item.contact_status | 0].label,
    subtitle: formatDate(item.contact_date),
  };

  return { header, relevance, contact };
}
