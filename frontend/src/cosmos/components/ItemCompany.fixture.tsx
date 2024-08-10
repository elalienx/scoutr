// Project files
import ItemCompany from "components/item-company/ItemCompany";
import SampleImages from "cosmos/sample-images.json";
import Candidate from "types/Candidate";

// Properties
const defaultCandidate: Candidate = {
  id: 1,
  assignment_id: 1,
  candidate_image_url: "",
  candidate_job_title: "",
  candidate_name: "",
  company_duration_in_months: 24,
  company_image_url: SampleImages.company_novare,
  company_name: "Novare Potential",
  contact_date: "",
  contact_status: 0,
  date_created: "",
  linked_in_url: "",
  notes: "",
  relevance: 0,
};
const shortJobCandidate: Candidate = {
  id: 2,
  assignment_id: 1,
  candidate_image_url: "",
  candidate_job_title: "",
  candidate_name: "",
  company_duration_in_months: 3,
  company_image_url: SampleImages.company_novare,
  company_name: "Novare Potential",
  contact_date: "",
  contact_status: 0,
  date_created: "",
  linked_in_url: "",
  notes: "",
  relevance: 0,
};
const emptyCandidate: Candidate = {
  id: 2,
  assignment_id: 1,
  candidate_image_url: "",
  candidate_job_title: "",
  candidate_name: "",
  company_duration_in_months: 24,
  company_image_url: "",
  company_name: "Novare Potential",
  contact_date: "",
  contact_status: 0,
  date_created: "",
  linked_in_url: "",
  notes: "",
  relevance: 0,
};

export default {
  Default: <ItemCompany candidate={defaultCandidate} />,
  "Short job duration": <ItemCompany candidate={shortJobCandidate} />,
  Empty: <ItemCompany candidate={emptyCandidate} />,
};
