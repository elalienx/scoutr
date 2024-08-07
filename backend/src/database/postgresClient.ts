// Node modules
import pg from "pg";

// Project files
import type Credentials from "../types/DatabaseCredentials";

export default async function postgresClient(credentials: Credentials): Promise<pg.Client> {
  const client: pg.Client = new pg.Client(credentials);
  const success = `Scoutr database ready on port ${credentials.port}`;
  const hostError = `Postgres: Ensure your environment has a Postgres server. If using Docker, verify that the host called ${credentials.host} matches the Docker container name of the database`;
  const portError = `Postgres: Check if the port ${credentials.port} matches the exposed port in Docker`;
  const databaseError = `Postgres: The database called ${credentials.database} does not exist on the current Postgress server`;
  const authError = `Postgres: The user ${credentials.user} or its password do not match the records in the database called ${credentials.database}`;

  try {
    await client.connect();

    console.info(success);
  } catch (error) {
    if (error.code === "ENOTFOUND") throw new Error(hostError);
    if (error.code === "ECONNREFUSED") throw new Error(portError);
    if (error.code === "3D000") throw new Error(databaseError);
    if (error.code === "28P01") throw new Error(authError);

    throw new Error(error);
  }

  return client;
}
