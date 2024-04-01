/**
 * About:
 * This interface outlines the data extracted from a LinkedIn user.
 * But for a complete candidate profile, more information is required.
 * So we need an array interface named Candidate to add the missing
 * information and ensure compatibility with PostgreSQL insert queries.
 */
export default interface LinkedInProfile {
  candidate_name: string;
  candidate_job_title: string;
  candidate_image_url: string;
  company_name: string;
  company_duration_in_months: number;
  company_image_url: string;
}
