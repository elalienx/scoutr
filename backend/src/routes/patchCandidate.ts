// Node modules
import { Request, Response } from "express";
import { Client } from "pg";

// Project files
import ResultsAPI from "../types/ResultsAPI";

export default async function patchCandidate(request: Request, response: Response, database: Client) {
  const id = Number(request.params.id);
  const updates = request.body;
  const messageBad = "Error: Cannot parse links";
  let result: ResultsAPI = { data: [], message: messageBad, status: 500 };

  // add safeguard if the keys received arent part of the Candidate interface
  // add safeguard if the candidate.id does not exist in the database.

  try {
    const setClause = Object.keys(updates)
      .map((key, idx) => `${key} = $${idx + 1}`)
      .join(", ");
    const values = Object.values(updates);
    const query = `UPDATE candidates SET ${setClause} WHERE id = $${values.length + 1} RETURNING *`;
    const { rows } = await database.query(query, values);
    const updatedFields = rows[0];

    result.data = updatedFields;
    result.message = "Updated candidate data";
    result.status = 200;
  } catch (error) {
    console.error(error);
  } finally {
    response.status(result.status).send(result);
  }
}
