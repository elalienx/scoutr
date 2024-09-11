export default interface LinkedInProfile {
  /** Full name of the candidate. */
  candidate_name: string;

  /** Job title of the candidate. */
  candidate_job_title: string;

  /** URL of the candidate's profile picture. */
  candidate_image_url: string;

  /** The name of the company the candidate is currently working. */
  company_name: string;

  /** Duration the candidate has been working at the current company, in months. */
  company_duration_in_months: number;

  /** URL of the company's logo. */
  company_image_url: string;
}
