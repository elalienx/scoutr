// Node modules
import type { Response } from "express";
import type { Client } from "pg";

// Project files
import type ResultsAPI from "../types/ResultsAPI";

export default async function getAssignments(response: Response, database: Client): Promise<void> {
  const query = "SELECT * FROM assignments ORDER BY id";
  const messageGood = "Assignments received";
  const messageEmpty = "Warning: No assignments available";
  const messageBad = "Error: Cannot get data";
  const result: ResultsAPI = { data: [], message: messageBad, status: 500 };

  try {
    const { rows } = await database.query(query);

    result.data = rows;
    result.message = rows.length > 0 ? messageGood : messageEmpty;
    result.status = 200;
  } catch (error) {
    console.error(error);
  } finally {
    response.status(result.status).send(result);
  }
}
