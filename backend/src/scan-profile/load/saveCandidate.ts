// Node modules
import { Client, QueryResult } from "pg";

// Project files
import query from "queries/insertCandidate";

export default async function saveAndReturnCandidate(database: Client, data: any[]): Promise<object> {
  // Properties
  let result = {};

  try {
    const records: QueryResult = await database.query(query, data);

    result = records.rows[0];
  } catch (error) {
    throw new Error("Postgres: Can't save candidate as one of the fields exceeds its designated column limit.");
  }

  return result;
}
