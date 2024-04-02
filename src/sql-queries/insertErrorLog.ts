const insertErrorLog: string = `
INSERT INTO error_logs (linked_in_url, severity, message) 
VALUES ($1, $2, $3)
`;

export default insertErrorLog;
