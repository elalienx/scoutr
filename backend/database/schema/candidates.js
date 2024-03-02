const candidates = [
  "id SERIAL PRIMARY KEY",
  "project_id INT",
  "date_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP",
  "linked_in_url VARCHAR(255)",
  "candidate_name VARCHAR(100)",
  "candidate_job_title VARCHAR(100)",
  "candidate_picture_url VARCHAR(255)",
  "company_name VARCHAR(100)",
  "company_duration VARCHAR(50)",
  "company_picture_url VARCHAR(255)",
  "notes TEXT",
  "relevance SMALLSERIAL",
  "contact_status SMALLSERIAL",
  "contact_date TIMESTAMP",
].join(", ");

export default candidates;
