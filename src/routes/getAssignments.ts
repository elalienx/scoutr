// Node modules
import { Response } from "express";
import { Client } from "pg";

// Project files
import ResultsAPI from "../types/ResultsAPI";

export default async function getAssignments(response: Response, database: Client): Promise<void> {
  const query = "SELECT * FROM assignments";
  const messageGood = "Assignments received";
  const messageEmpty = "Warning: No assignments available";
  const messageBad = "Error: Cannot get data";
  let result: ResultsAPI = { data: [], message: messageBad, status: 500 };

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
