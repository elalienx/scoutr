const insertCandidate: string = `INSERT INTO candidates (
    assignment_id,
    linked_in_url, 
    candidate_name, 
    candidate_job_title,
    candidate_image_url,
    company_name,
    company_duration_in_months,
    company_image_url
  ) 
  VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
  RETURNING *
`;

export default insertCandidate;
