// Node modules
import type { Request, Response } from "express";
import type { Client } from "pg";

// Project files
import query from "queries/insertAssignment";

export default async function postAssignment(request: Request, response: Response, database: Client): Promise<void> {
  const { assignment_name, company_name, company_image_url = "" } = request.body;
  const messageBad = "Error: Database can't save data";
  const statusGood = 200;
  const statusBad = 500;

  try {
    const { rows } = await database.query(query, [assignment_name, company_name, company_image_url]);
    const data = rows[0];

    response.status(statusGood).send(data);
  } catch (error) {
    console.error(error);
    response.status(statusBad).send(messageBad);
  }
}
