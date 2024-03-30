export const assignments: string = `CREATE TABLE IF NOT EXISTS assignments(
    id SERIAL PRIMARY KEY, 
    date_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    assignment_name VARCHAR(50),
    company_name VARCHAR(50),
    company_image_url VARCHAR(255)
)`;
