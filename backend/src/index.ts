// Node modules
import express from "express";

// Project files
import credentials from "./database/credentials";
import postgresClient from "./database/postgresClient";
import getAssignments from "./routes/getAssignments";
import getCandidates from "./routes/getCandidates";
import parseLinks from "./routes/parseLinks";
import postAssignment from "./routes/postAssignment";
import patchCandidate from "./routes/patchCandidate";

async function initializeServer(port: number) {
  // Properties
  const client = await postgresClient(credentials);
  const app = express();

  // Start server
  app.use(express.json());
  app.listen(port, () => console.info(`Scoutr backend server v3 ready on port ${port}`));

  // Routes
  app.get("/assignments", (request, response) => getAssignments(response, client));
  app.post("/assignments", (request, response) => postAssignment(request, response, client));
  app.get("/candidates/:assignment_id", (request, response) => getCandidates(request, response, client));
  app.patch("/candidates/:id", (request, response) => patchCandidate(request, response, client));
  app.get("/parse-links/:assignment_id", async (request, response) => parseLinks(request, response, client));
}

initializeServer(8000);
