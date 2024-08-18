// Node modules
import type { Request, Response } from "express";
import type { Client } from "pg";
import { Page } from "playwright";

// Project files
import etlProcess from "scan-profile/etlProcess";
import enforceArray from "./helpers/enforceArray";

export default async function parseLinks(request: Request, response: Response, database: Client, browserPage: Page) {
  // Headers
  response.setHeader("Content-Type", "text/event-stream");

  // Properties
  const assignment_id = Number(request.params.assignment_id);
  const enforcedArray = enforceArray(request.query.links as string[]);
  const links = enforcedArray.map((item) => decodeURI(item));

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
    await browserPage.goto("about:blank"); // Stops network requests until the browser is closed to prevent LinkedIn ads from consuming resources.
  }
}
