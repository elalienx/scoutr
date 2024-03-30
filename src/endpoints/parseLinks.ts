// Node modules
import { Request, Response } from "express";
import { Client } from "pg";

// Project files
import getPage from "../scrap/getPage";
import templateLinkedIn from "../scrap/templateLinkedIn";
import { insertCandidate } from "../schema/insertCandidate";

export default async function parseLinkedInLinks(request: Request, response: Response, database: Client) {
  const { assignment_id } = request.params;
  const { links } = request.body;

  async function scrap(url: string) {
    // extract
    const page: string = await getPage(url);

    // transform
    const candidate: object = templateLinkedIn(page);

    // load (store)
    const candidateToArray = Object.keys(candidate).map((key) => candidate[key]);
    const data = [assignment_id, url, ...candidateToArray];
    const { rows } = await database.query(insertCandidate, data);

    return rows[0];
  }

  try {
    const rows = await links.map((item: string) => scrap(item));

    response.status(200).send(rows);
  } catch (error) {
    console.error(error);
    response.sendStatus(500);
  }
}
