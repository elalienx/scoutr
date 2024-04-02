const errorLogs: string = `CREATE TABLE IF NOT EXISTS error_logs(
    id SERIAL PRIMARY KEY, 
    date_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    linked_in_url VARCHAR(100),
    severity SMALLINT,
    message  TEXT
)`;

export default errorLogs;
