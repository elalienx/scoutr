// Node modules
import express from "express";

// Project files
import credentials from "./database/credentials";
import postgresClient from "./database/postgresClient";
import getAssignments from "./routes/getAssignments";
import getCandidates from "./routes/getCandidates";
import parseLinks from "./routes/parseLinks";
import postAssignment from "./routes/postAssignment";

async function initializeServer(port: number) {
  // Properties
  const client = await postgresClient(credentials);
  const app = express();

  // Start server
  app.use(express.json());
  app.listen(port, () => console.info(`Scoutr server ready on port ${port} V3`));

  // Routes
  app.get("/assignments", (request, response) => getAssignments(response, client));
  app.post("/assignments", (request, response) => postAssignment(request, response, client));
  app.get("/candidates/:assignment_id", (request, response) => getCandidates(request, response, client));
  app.post("/parse_links/:assignment_id", (request, response) => parseLinks(request, response, client));
}

initializeServer(8000);
