// Node modules
import { Client } from "pg";

// Project files
import assignments from "../sql/assignments";
import candidates from "../sql/candidates";
import errorLogs from "../sql/errorLogs";

export default async function createTables(database: Client): Promise<void> {
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
