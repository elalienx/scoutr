// Node modules
import { Client } from "pg";

// Project files
import { assignments } from "../schema/assignments";
import { candidates } from "../schema/candidates";
import { errorLogs } from "../schema/errorLogs";

export default async function initializeTables(database: Client) {
  const message = "Postgres initialized tables";

  try {
    await database.query(assignments);
    await database.query(candidates);
    await database.query(errorLogs);
    console.info(message);
  } catch (error) {
    throw new Error(error);
  }
}
