// Node modules
import { Request, Response } from "express";
import { Client } from "pg";

// Project files
import getPage from "../scrap/getPage";
import templateLinkedIn from "../scrap/templateLinkedIn";

export default async function parseLinkedInLinks(request: Request, response: Response, database: Client) {
  const { assignment_id } = request.params;
  const { links } = request.body;
  const rows = [];
  const query = `INSERT INTO candidates (
    assignment_id,
    linked_in_url, 
    candidate_name, 
    candidate_job_title,
    candidate_image_url,
    company_name,
    company_duration_in_months,
    company_image_url
  ) 
  VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
  RETURNING *
  `;

  async function ETL(url: string) {
    // extract
    const page: string = await getPage(url);

    // transform
    const candidate: object = templateLinkedIn(page);

    // load (store)
    const candidateToArray = Object.keys(candidate).map((key) => candidate[key]);
    const data = [assignment_id, url, ...candidateToArray];
    const { rows } = await database.query(query, data);

    return rows[0];
  }

  try {
    for (let index = 0; index < links.length; index++) {
      const candidate = await ETL(links[index]);

      rows.push(candidate);
    }

    response.status(200).send(rows);
  } catch (error) {
    console.error(error);
    response.sendStatus(500);
  }
}
