// Node modules
import type { Request, Response } from "express";
import type { Client } from "pg";

// Project files
import type ResultsAPI from "../types/ResultsAPI";

export default async function getCandidates(request: Request, response: Response, database: Client): Promise<void> {
  const { assignment_id } = request.params;
  const query = "SELECT * FROM candidates WHERE assignment_id = $1 ORDER BY id";
  const messageGood = "Candidates received";
  const messageEmpty = `Warning: No candidates match assignment_id ${assignment_id}`;
  const result: ResultsAPI = { data: [], message: "Unknown error", status: 500 };

  try {
    const { rows } = await database.query(query, [assignment_id]);

    result.data = rows;
    result.message = rows.length > 0 ? messageGood : messageEmpty;
    result.status = 200;
  } catch (error) {
    result.message = error;
  } finally {
    response.status(result.status).send(result);
  }
}
