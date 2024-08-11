// Node modules
import { Client } from "pg";

// Project files
import query from "queries/insertErrorLog";

export default async function saveReport(database: Client, data: any[]): Promise<void> {
  try {
    await database.query(query, data);
  } catch (error) {
    throw new Error("Postgress: Can't save report as one of the fields exceeds its designated column limit.");
  }
}
