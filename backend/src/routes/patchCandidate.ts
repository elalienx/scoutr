// Node modules
import { Request, Response } from "express";
import { Client } from "pg";

// Project files
import ResultsAPI from "../types/ResultsAPI";
import updateCandidate from "../queries/updateCandidate";

export default async function patchCandidate(request: Request, response: Response, database: Client) {
  const id = Number(request.params.id);
  const updates = request.body;
  let result: ResultsAPI = { data: [], message: "Unknown error", status: 500 };

  // Safeguard for keys received aren't part of Candidate. Done by passing keyOffCandidate to veryify the keys.
  // Safeguard for candidate.id not existing in the database. This may be done by encapsulating and mocking database.query()

  try {
    const keys = Object.keys(updates);
    const values = Object.values(updates);
    const query = updateCandidate(id, keys); //
    const { rows } = await database.query(query, values);

    result.data = rows[0];
    result.message = "Updated candidate";
    result.status = 200;
  } catch (error) {
    result.message = error;
  } finally {
    response.status(result.status).send(result);
  }
}
