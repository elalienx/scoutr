/**
 * About:
 * This interface outlines the data extractable from LinkedIn.
 * However, for a complete candidate profile, additional keys are required.
 * Therefore, we've need a second interface named Candidate which is an array
 * to ensure compatibility with PostgreSQL insert query values.
 */
export default interface LinkedInProfile {
  candidate_name: string;
  candidate_job_title: string;
  candidate_image_url: string;
  company_name: string;
  company_duration_in_months: number;
  company_image_url: string;
}
