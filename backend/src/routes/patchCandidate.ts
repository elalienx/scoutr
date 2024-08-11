// Node modules
import type { Request, Response } from "express";
import type { Client } from "pg";

// Project files
import updateCandidate from "queries/updateCandidate";

export default async function patchCandidate(request: Request, response: Response, database: Client) {
  const id = Number(request.params.id);
  const messageBad = "Error: Database can't edit data";
  const updates = request.body;
  const statusGood = 200;
  const statusBad = 500;

  // Refactor: Safeguard for keys received aren't part of Candidate. Done by passing keyOffCandidate to veryify the keys.
  // Refactor: Safeguard for candidate.id not existing in the database. This may be done by encapsulating and mocking database.query()

  try {
    const keys = Object.keys(updates);
    const values = Object.values(updates);
    const query = updateCandidate(id, keys);
    const { rows } = await database.query(query, values);
    const data = rows[0];

    response.status(statusGood).send(data);
  } catch (error) {
    console.error(error);
    response.status(statusBad).send(messageBad);
  }
}
