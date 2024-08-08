// Node modules
import pg from "pg";

// Project files
import query from "../../queries/insertCandidate.ts";

export default async function saveAndReturnCandidate(database: pg.Client, data: any[]): Promise<object> {
  // Properties
  let result = {};

  try {
    const databaseRecords: pg.QueryResult = await database.query(query, data);

    result = databaseRecords.rows[0];
  } catch (error) {
    throw new Error("Postgress: Can't save candidate as one of the fields exceeds its designated column limit.");
  }

  return result;
}
