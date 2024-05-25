// Node modules
import type { Request, Response } from "express";
import type { Client } from "pg";

// Project files
import etlProcess from "../extract-profile-sse/etlProcess";

export default async function parseLinksSSE(request: Request, response: Response, database: Client) {
  /** Check on Spike if one or all can be deleted */
  // Headers
  response.setHeader("Content-Type", "text/event-stream");
  response.setHeader("Cache-Control", "no-cache");
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader("Connection", "keep-alive");

  // Properties
  const assignment_id = Number(request.params.assignment_id);
  const endEventMessage = "\n\n";
  let links = request.query.links as string[];

  // Safeguard for single links
  if (!Array.isArray(links)) links = [links];

  try {
    for (const link of links) {
      const { candidate, report } = await etlProcess(link, assignment_id, database);
      const data = { candidate, report }; // check if i can pass cand and repo directly

      response.write(`data: ${JSON.stringify(data)}${endEventMessage}`);
    }
  } catch (error) {
    console.error("Error:", error);
  } finally {
    response.end();
  }
}
