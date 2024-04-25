export default interface Assignment {
  /** The assignment's unique identifier. */
  id: number;

  /** A date assigned automatically by the database. */
  date_created: string;

  /** The title of the person to be hired. */
  assignment_name: string;

  /** The company that hired us to fill this job vacancy. */
  company_name: string;

  /** The logo of the company. */
  company_image_url: string;
}
