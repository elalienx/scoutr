// Node modules
import { Request, Response } from "express";
import { Client } from "pg";

// Project files
import extractPage from "../scrap/getPage";
import transformProfile from "../scrap/templateLinkedIn";
import { insertCandidate } from "../schema/insertCandidate";

export default async function parseLinkedInLinks(request: Request, response: Response, database: Client) {
  const { assignment_id } = request.params;
  const { links } = request.body;

  async function ETLProcess(url: string) {
    // Extract
    const page: string = await extractPage(url);

    // Transform
    const profile: object = transformProfile(page);

    // Load
    const candidateToArray = Object.keys(profile).map((key) => profile[key]);
    const data = [assignment_id, url, ...candidateToArray];
    const { rows } = await database.query(insertCandidate, data);

    return rows[0];
  }

  try {
    const rows = await Promise.all(links.map((link: string) => ETLProcess(link)));

    response.status(200).send(rows);
  } catch (error) {
    console.error(error);
    response.sendStatus(500);
  }
}
