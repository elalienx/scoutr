// Node modules
import { Request, Response } from "express";
import { Client } from "pg";

// Project files
import extractPage from "../extract/extractPage";
import pageToProfile from "../transform/pageToProfile";
import { insertCandidate } from "../sql-queries/insertCandidate";
import profileToCandidate from "../transform/profileToCandidate";

export default async function parseLinkedInLinks(request: Request, response: Response, database: Client) {
  const { assignment_id } = request.params;
  const { links } = request.body;

  async function ETLProcess(url: string) {
    // Extract
    const page = await extractPage(url);

    // Transform
    const profile = pageToProfile(page);
    const candidateRow = profileToCandidate(profile, { assignment_id, url });

    // Load
    const { rows } = await database.query(insertCandidate, candidateRow as unknown[]);

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
