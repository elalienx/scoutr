// Node modules
import { Client, QueryResult } from "pg";

// Project files
import query from "queries/insertCandidate";

export default async function saveAndReturnCandidate(database: Client, data: any[]): Promise<object> {
  // Properties
  let result = {};

  try {
    const databaseRecords: QueryResult = await database.query(query, data);

    result = databaseRecords.rows[0];
  } catch (error) {
    throw new Error("Postgress: Can't save candidate as one of the fields exceeds its designated column limit.");
  }

  return result;
}
