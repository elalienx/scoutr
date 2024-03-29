// Node modules
import express from "express";

// Node modules
import postgresClient from "./database/postgresClient";

// Project files
import { credentials } from "./database/credentials";
import getAssignments from "./endpoints/getAssignments";
import postAssignment from "./endpoints/postAssignment";
import postCandidate from "./endpoints/postCandidate";
import getCandidatesByAssignmentId from "./endpoints/getCandidatesByAssignmentId";

export default async function initializeServer(_port: number) {
  // Properties
  const app = express();
  const port = _port;
  const client = await postgresClient(credentials);

  // Start server
  app.use(express.json());
  app.listen(port, () => console.info(`Scoutr server ready on port ${port} V3`));

  // Routes
  app.get("/assignments", (request, response) => getAssignments(response, client));
  app.post("/assignments", (request, response) => postAssignment(request, response, client));
  app.get("/candidates/:assignment_id", (request, response) => getCandidatesByAssignmentId(request, response, client));
  app.post("/candidates", (request, response) => postCandidate(request, response, client));
}

initializeServer(8000);
