// Node modules
import type { Request, Response } from "express";
import type { Client } from "pg";
import { Page } from "playwright";

// Project files
import etlProcess from "../scan-profile/etlProcess";
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
    console.error(error);
    response.write(`event: error\ndata: ${error}\n\n`);
  } finally {
    response.end();
    // Important: To stop linkedin ad scripts eating resources
    // The await is so we cannot parse more links until this process is done
    await browserPage.goto("about:blank");
  }
}
