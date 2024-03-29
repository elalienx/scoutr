// Node modules
import { Pool } from "pg";

// Project files
import Credentials from "../types/DatabaseCredentials";

export default async function initializePool(
  pool: Pool,
  credentials: Credentials
) {
  // @ts-ignore
  const postgress = new pool(credentials);
  const messages = {
    success: `Posgress server started on port ${credentials.port}`,
    hostError: `Error: Ensure your environment has a Postgres server. If using Docker, verify that the host called ${credentials.host} matches the Docker container name of the database`,
    portError: `Error: Check if the port ${credentials.port} matches the exposed port in Docker`,
    databaseError: `Error: The database called ${credentials.database} does not exist on the current Postgress server`,
    authError: `Error: The user ${credentials.user} or its password do not match the records in the database called ${credentials.database}`,
  };

  try {
    await postgress.connect();

    console.info(messages.success);
  } catch (error) {
    if (error.code === "ENOTFOUND") console.error(messages.hostError);
    if (error.code === "ECONNREFUSED") console.error(messages.portError);
    if (error.code === "3D000") console.error(messages.databaseError);
    if (error.code === "28P01") console.error(messages.authError);

    throw new Error(error);
  }

  return postgress;
}
