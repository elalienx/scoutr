// Project files
import ItemCandidate from "components/item-candidate/ItemCandidate";
import SampleImages from "cosmos/sample-images.json";
import type Candidate from "types/Candidate";

// Properties
const normal: Candidate = {
  id: 1,
  assignment_id: 1,
  candidate_image_url: SampleImages.candidate_eduardo,
  candidate_job_title: "Frontend Developer",
  candidate_name: "Eduardo Alvarez",
  company_duration_in_months: 0,
  company_image_url: "",
  company_name: "",
  contact_date: "",
  contact_status: 0,
  date_created: "",
  linked_in_url: "https://www.linkedin.com/in/eduardo-alvarez-nowak/",
  notes: "",
  relevance: 0,
};
const empty: Candidate = {
  id: 2,
  assignment_id: 1,
  candidate_image_url: "",
  candidate_job_title: "UX Generalist",
  candidate_name: "Jorge Dominguez Perdomo",
  company_duration_in_months: 0,
  company_image_url: "",
  company_name: "",
  contact_date: "",
  contact_status: 0,
  date_created: "",
  linked_in_url: "https://www.linkedin.com/in/jorgedp/",
  notes: "",
  relevance: 0,
};

export default {
  Default: <ItemCandidate candidate={normal} />,
  Empty: <ItemCandidate candidate={empty} />,
};
