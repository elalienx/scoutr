// Node modules
import { Request, Response } from "express";
import { Client } from "pg";

// Project files
import etlProcess from "../extract-profile-sse/etlProcess";
import ErrorReport from "../types/ErrorReport";

export default async function parseLinksSSE(request: Request, response: Response, database: Client) {
  // Headers
  response.setHeader("Content-Type", "text/event-stream");
  response.setHeader("Cache-Control", "no-cache");
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader("Connection", "keep-alive");

  // Properties
  const assignment_id = Number(request.params.assignment_id);
  let links = request.query.links as string[];

  // Safeguard for single links
  if (!Array.isArray(links)) links = [links];
  console.log("Server links & length", links, links.length);

  try {
    for (const link of links) {
      const { candidate, report } = await etlProcess(link, assignment_id, database);
      // const candidate = { id: 100, assignment_id: 1, candidate_name: "Eduardo Alvarez" };
      // const report: ErrorReport = { url: link, severity: 2, message: "missing all fields" };
      const data = { candidate, report };
      const eventCloser = "\n\n";

      response.write(`data: ${JSON.stringify(data)}${eventCloser}`);
    }
  } catch (error) {
    console.error("Error:", error);
  } finally {
    response.end();
  }
}
