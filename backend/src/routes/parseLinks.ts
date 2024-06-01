// Node modules
import type { Request, Response } from "express";
import type { Client } from "pg";

// Project files
import etlProcess from "../extract-profile/etlProcess";
import waitForSeconds from "../scripts/waitForSeconds";

export default async function parseLinks(request: Request, response: Response, database: Client) {
  // Headers
  response.setHeader("Content-Type", "text/event-stream");

  // Properties
  const assignment_id = Number(request.params.assignment_id);
  let links = request.query.links as string[];

  // Safeguard for single links
  if (!Array.isArray(links)) links = [links];

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
