export const insertErrorLog: string = `
INSERT INTO error_logs (linked_in_url, error_severity, error_message) 
VALUES ($1, $2, $3)
`;
