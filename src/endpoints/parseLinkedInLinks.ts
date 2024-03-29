// Node modules
import { Request, Response } from "express";
import { Client } from "pg";

// Project files
import getPage from "../scrap/getPage";
import templateLinkedIn from "../scrap/templateLinkedIn";

export default async function parseLinkedInLinks(request: Request, response: Response, database: Client) {
  const { links } = request.params;

  try {
    // extract
    const page: string = await getPage(links[0]);

    // transform
    const candidate: object = templateLinkedIn(page);

    // load
    response.status(200).send(candidate);
  } catch (error) {
    console.error(error);
    response.sendStatus(500);
  }
}
