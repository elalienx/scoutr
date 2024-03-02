// Node modules
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import pkg from "pg";

// Project files
import keys from "./keys.js";

// Properties
const { Pool } = pkg;
const port = 5000;
const app = express();
const postgressClient = new Pool({
  user: keys.pgUser,
  host: keys.pgHost,
  database: keys.pgDatabase,
  password: keys.pgPassword,
  port: keys.pgPort,
});
const tableCandidateColumns = [
  "id SERIAL PRIMARY KEY",
  "project_id INT",
  "date_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP",
  "linked_in_url VARCHAR(255)",
  "candidate_job_title VARCHAR(100)",
  "candidate_picture_url VARCHAR(255)",
  "company_name VARCHAR(100)",
  "company_duration VARCHAR(50)",
  "company_picture_url VARCHAR(255)",
  "notes TEXT",
  "relevance DECIMAL(5,2)",
  "contact_status INT",
  "contact_date TIMESTAMP",
].join(", ");

postgressClient.on("connect", (client) => {
  client
    .query(`CREATE TABLE IF NOT EXISTS candidates (${tableCandidateColumns})`)
    .catch((error) => console.log("PG ERROR", error));
});

app.use(cors());
app.use(bodyParser.json());
app.get("/", (request, resolve) => resolve.send("Hi"));

// Get values
app.get("/candidates/all", async (request, resolve) => {
  const values = await postgressClient.query("SELECT * FROM values");

  resolve.send(values);
});

// Post values
app.post("/candidates", async (request, resolve) => {
  // safeguard
  if (!request.body.value) resolve.send({ working: false });

  postgressClient.query("INSERT INTO candidates(candidate_name) VALUES($1)", [
    request.body.value,
  ]);

  resolve.send({ working: true });
});
app.listen(port, () => console.log(`Listening on port ${port}`));
