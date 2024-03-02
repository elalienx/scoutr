// Node modules
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

// Project files
import postgressClient from "./postgressClient";

// Properties
const port = 5000;
const app = express();

app.use(cors());
app.use(bodyParser.json());

// Endpoints
app.get("/candidates/all", getCandidates(request, resolve, postgressClient));
app.post("/candidates", postCandidate(request, resolve, postgressClient));

// Start server
app.listen(port, () => console.log(`Listening on port ${port}`));

// Methods
async function getCandidates(request, resolve, client) {
  const data = await client.query("SELECT * FROM candidates");

  resolve.send(data);
}
async function postCandidate(request, resolve, client) {
  // safeguard
  if (!request.body.candidate || typeof request.body.candidate !== "object") {
    resolve.send({ working: false });
    return;
  }

  const { candidate_name, candidate_job_title } = request.body.candidate;

  if (!candidate_name || !candidate_job_title) {
    resolve.send({ working: false });
    return;
  }

  try {
    await client.query(
      "INSERT INTO candidates(candidate_name, candidate_job_title) VALUES($1, $2)",
      [candidate_name, candidate_job_title]
    );
    resolve.send({ working: true });
  } catch (error) {
    console.error("PG ERROR", error);
    resolve.send({ working: false });
  }
}
