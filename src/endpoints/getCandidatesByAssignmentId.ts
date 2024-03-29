// Node modules
import { Request, Response } from "express";
import { Client } from "pg";

export default async function getCandidatesByAssignmentId(request: Request, response: Response, database: Client) {
  const { assignment_id } = request.params;
  const values = [assignment_id];
  const query = "SELECT * FROM candidates WHERE assignment_id = $1";

  try {
    const { rows } = await database.query(query, values);

    response.status(200).send(rows);
  } catch (error) {
    console.error(error);
    response.sendStatus(500);
  }
}
