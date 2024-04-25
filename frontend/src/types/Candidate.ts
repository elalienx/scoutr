export default interface Candidate {
  /** Unique identifier for each candidate. */
  id: number;

  /** Foreign key linking candidates to assignments. */
  projectId: number;

  /** Date when the candidate profile was added to the database. */
  date_created: string;

  /** URL of the candidate's LinkedIn profile. */
  linked_in_url: string;

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

  /** URL of the company's logo the candidate is currently working. */
  company_image_url: string;

  /** Any additional notes about the candidate added by the recruiter. */
  notes: string;

  /** Rating from 1 to 5 indicating the candidate's relevance to the assignment, with higher values being more relevant. */
  relevance: number;

  /** Rating from 1 to 5 indicating the status of contact with the candidate, with lower values indicating more recent contact. */
  contact_status: number;

  /** Date of the most recent contact with the candidate. */
  contact_date: string;
}
