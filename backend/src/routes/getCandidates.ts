// Node modules
import { Request, Response } from "express";
import { Client } from "pg";

// Project files
import ResultsAPI from "../types/ResultsAPI";

export default async function getCandidates(request: Request, response: Response, database: Client): Promise<void> {
  const { assignment_id } = request.params;
  const query = "SELECT * FROM candidates WHERE assignment_id = $1";
  const messageGood = "Candidates received";
  const messageEmpty = `Warning: No candidates match assignment_id ${assignment_id}`;
  const messageBad = "Error: Cannot get data";
  let result: ResultsAPI = { data: [], message: messageBad, status: 500 };

  try {
    const { rows } = await database.query(query, [assignment_id]);

    result.data = rows;
    result.message = rows.length > 0 ? messageGood : messageEmpty;
    result.status = 200;
  } catch (error) {
    console.error(error);
  } finally {
    response.status(result.status).send(result);
  }
}
