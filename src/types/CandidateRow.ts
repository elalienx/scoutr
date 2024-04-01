/**
 * About:
 * This type outlines the exact order of items the candidate table
 * expects its values based on the query for inserting candidates.
 */
type CandidateRow = [
  assignment_id: number,
  linked_in_url: string,
  candidate_name: string,
  candidate_job_title: string,
  candidate_image_url: string,
  company_name: string,
  company_duration_in_months: number,
  company_image_url: string
];

export default CandidateRow;
