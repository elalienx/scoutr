// Project files
import SampleImages from "cosmos/sample-images.json";
import ItemCandidate from "./ItemCandidate";
import Candidate from "types/Candidate";

// Properties
const defaultCandidate: Candidate = {
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
const emptyCandidate: Candidate = {
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
  Default: <ItemCandidate candidate={defaultCandidate} />,
  Empty: <ItemCandidate candidate={emptyCandidate} />,
};
