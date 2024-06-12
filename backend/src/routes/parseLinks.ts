// Node modules
import type { Request, Response } from "express";
import type { Client } from "pg";

// Project files
import etlProcess from "../extract-profile/etlProcess";
import unZipLinks from "../scripts/unZipLinks";

export default async function parseLinks(request: Request, response: Response, database: Client) {
  // Headers
  response.setHeader("Content-Type", "text/event-stream");

  // Properties
  const assignment_id = Number(request.params.assignment_id);
  const unZippedLinks = unZipLinks(request.query.links as string[]);
  const links = unZippedLinks.map((item) => decodeURI(item));

  console.log("unzipped links", unZippedLinks);
  console.log("decoded links", links);

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
