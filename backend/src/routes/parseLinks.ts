// Node modules
import type { Request, Response } from "express";
import type { Client } from "pg";
import { Page } from "playwright";

// Project files
import etlProcess from "../extract-profile/etlProcess";
import unZipLinks from "../scripts/unZipLinks";

export default async function parseLinks(request: Request, response: Response, database: Client, browserPage: Page) {
  // Headers
  response.setHeader("Content-Type", "text/event-stream");

  // Properties
  const assignment_id = Number(request.params.assignment_id);
  const unZippedLinks = unZipLinks(request.query.links as string[]);
  const links = unZippedLinks.map((item) => decodeURI(item));

  try {
    for (const link of links) {
      const { candidate, report } = await etlProcess(link, assignment_id, database, browserPage);
      const data = { candidate, report };

      response.write(`data: ${JSON.stringify(data)}\n\n`);
    }
  } catch (error) {
    console.error("Parse link:", error);
    response.write(`event: error\n`);
    response.write(`data:  ${error}\n\n`);
  } finally {
    response.end();
  }
}
