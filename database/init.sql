CREATE TABLE IF NOT EXISTS assignments(
    id SERIAL PRIMARY KEY, 
    date_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    assignment_name VARCHAR(50),
    company_name VARCHAR(50),
    company_image_url VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS candidates(
    id SERIAL PRIMARY KEY,
    assignment_id INTEGER REFERENCES assignments(id),
    date_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    linked_in_url VARCHAR(100),
    candidate_name VARCHAR(50),
    candidate_job_title VARCHAR(255),
    candidate_image_url VARCHAR(255),
    company_name VARCHAR(50),
    company_duration_in_months SMALLINT,
    company_image_url VARCHAR(255),
    notes TEXT,
    relevance SMALLINT,
    contact_status SMALLINT,
    contact_date TIMESTAMP NULL
);

CREATE TABLE IF NOT EXISTS error_logs(
    id SERIAL PRIMARY KEY, 
    date_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    linked_in_url VARCHAR(100),
    severity SMALLINT,
    message  TEXT
);