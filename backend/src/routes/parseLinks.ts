// Node modules
import type { Request, Response } from "express";
import type { Client } from "pg";

// Project files
import etlProcess from "../extract-profile/etlProcess";
import decodeLinks from "../scripts/decodeLinks";

export default async function parseLinks(request: Request, response: Response, database: Client) {
  // Headers
  response.setHeader("Content-Type", "text/event-stream");
  response.setHeader("Cache-Control", "no-cache");
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader("Connection", "keep-alive");

  // Properties
  const assignment_id = Number(request.params.assignment_id);
  const links = decodeLinks(request.query.links as string);
  console.log("backend links:", links);

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
