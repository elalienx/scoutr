const errorLogs: string = `CREATE TABLE IF NOT EXISTS error_logs(
    id SERIAL PRIMARY KEY, 
    date_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    linked_in_url VARCHAR(100),
    error_severity SMALLINT,
    error_message  TEXT
)`;

export default errorLogs;
