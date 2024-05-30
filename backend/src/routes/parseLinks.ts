// Node modules
import type { Request, Response } from "express";
import type { Client } from "pg";

// Project files
import etlProcess from "../extract-profile/etlProcess";

export default async function parseLinks(request: Request, response: Response, database: Client) {
  console.log("Getting data from the frontend");
  /** Check on Spike if one or all can be deleted */
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
  console.log(links);

  try {
    for (const link of links) {
      const { candidate, report } = await etlProcess(link, assignment_id, database);
      const data = { candidate, report };

      response.write(`data: ${JSON.stringify(data)}\n\n`);
    }
  } catch (error) {
    console.error("Error:", error);
  } finally {
    response.end();
  }
}
