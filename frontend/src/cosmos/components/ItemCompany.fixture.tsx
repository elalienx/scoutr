// Project files
import ItemCompany from "components/item-company/ItemCompany";
import SampleImages from "cosmos/sample-images.json";
import type Candidate from "types/Candidate";

// Properties
const normal: Candidate = {
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
const shortJobDuration: Candidate = {
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
const empty: Candidate = {
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
  Default: <ItemCompany candidate={normal} />,
  "Short job duration": <ItemCompany candidate={shortJobDuration} />,
  Empty: <ItemCompany candidate={empty} />,
};
