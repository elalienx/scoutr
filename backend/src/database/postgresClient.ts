// Node modules
import { Client } from "pg";

// Project files
import type Credentials from "../types/DatabaseCredentials";

export default async function postgresClient(credentials: Credentials): Promise<Client> {
  const client: Client = new Client(credentials);
  const success = `Posgress server started on port ${credentials.port}`;
  const hostError = `Error: Ensure your environment has a Postgres server. If using Docker, verify that the host called ${credentials.host} matches the Docker container name of the database`;
  const portError = `Error: Check if the port ${credentials.port} matches the exposed port in Docker`;
  const databaseError = `Error: The database called ${credentials.database} does not exist on the current Postgress server`;
  const authError = `Error: The user ${credentials.user} or its password do not match the records in the database called ${credentials.database}`;

  try {
    await client.connect();

    console.info(success);
  } catch (error) {
    if (error.code === "ENOTFOUND") console.error(hostError);
    if (error.code === "ECONNREFUSED") console.error(portError);
    if (error.code === "3D000") console.error(databaseError);
    if (error.code === "28P01") console.error(authError);

    throw new Error(error);
  }

  return client;
}
