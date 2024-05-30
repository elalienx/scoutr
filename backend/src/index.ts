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
import debugParseLinks from "./routes/debugParseLinks";

async function initializeServer(port: number) {
  // Properties
  const client = await postgresClient(credentials);
  const app = express();

  // Start server
  app.use(express.json());
  app.listen(port, () => console.info(`Scoutr backend server v3 ready on port ${port}`));

  // API routes
  app.get("/api/assignments", (request, response) => getAssignments(response, client));
  app.post("/api/assignments", (request, response) => postAssignment(request, response, client));
  app.get("/api/candidates/:assignment_id", (request, response) => getCandidates(request, response, client));
  app.patch("/api/candidates/:id", (request, response) => patchCandidate(request, response, client));

  // Server Side Events routes
  app.get("/sse/parse-links/:assignment_id", async (request, response) => parseLinks(request, response, client));
  app.get("/sse/debug-parse-links/:assignment_id", async (request, response) => debugParseLinks(request, response));
}

initializeServer(8000);
