// Node modules
import type { Response } from "express";
import type { Client } from "pg";

export default async function getAssignments(response: Response, database: Client): Promise<void> {
  const query = "SELECT * FROM assignments ORDER BY id";
  const messageBad = "Error: Database can't get data";
  const statusGood = 200;
  const statusBad = 500;

  try {
    const { rows } = await database.query(query);
    const data = rows;

    response.status(statusGood).send(data);
  } catch (error) {
    console.error(error);
    response.status(statusBad).send(messageBad);
  }
}
