const insertAssignment: string = `
INSERT INTO assignments (assignment_name, company_name, company_image_url) 
VALUES ($1, $2, $3)
RETURNING *
`;

export default insertAssignment;
