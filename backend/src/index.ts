// Node modules
import express from "express";

// Project files
import databaseCredentials from "./database/credentials.ts";
import postgresClient from "./database/postgresClient.ts";
import getAssignments from "./routes/getAssignments.ts";
import getCandidates from "./routes/getCandidates.ts";
import parseLinks from "./routes/parseLinks.ts";
import postAssignment from "./routes/postAssignment.ts";
import patchCandidate from "./routes/patchCandidate.ts";
import getPageWithContext from "./browser/getPageWithContext.ts";

async function initializeServer(port: number) {
  // Properties
  const app = express();
  const client = await postgresClient(databaseCredentials);
  const page = await getPageWithContext("LoginAuth.json");

  // Start server
  app.use(express.json());
  app.listen(port, () => console.info(`Scoutr backend ready on port ${port}`));

  // API routes
  app.get("/api/assignments", (request, response) => getAssignments(response, client));
  app.post("/api/assignments", (request, response) => postAssignment(request, response, client));
  app.get("/api/candidates/:assignment_id", (request, response) => getCandidates(request, response, client));
  app.patch("/api/candidates/:id", (request, response) => patchCandidate(request, response, client));

  // Server Side Events routes
  app.get("/sse/parse-links/:assignment_id", async (request, response) => parseLinks(request, response, client, page));
}

initializeServer(8000);
