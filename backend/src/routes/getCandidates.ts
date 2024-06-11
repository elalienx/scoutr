// Node modules
import type { Request, Response } from "express";
import type { Client } from "pg";

export default async function getCandidates(request: Request, response: Response, database: Client): Promise<void> {
  const { assignment_id } = request.params;
  const query = "SELECT * FROM candidates WHERE assignment_id = $1 ORDER BY id";
  const messageBad = "Error: Database can't get data";
  const statusGood = 200;
  const statusBad = 500;

  try {
    const { rows } = await database.query(query, [assignment_id]);
    const data = rows;

    response.status(statusGood).send(data);
  } catch (error) {
    console.error(error);
    response.status(statusBad).send(messageBad);
  }
}
