// Node modules
import { expect, test } from "vitest";

// Project files
import postgresClient from "./postgresClient";
import type DatabaseCredentials from "types/DatabaseCredentials";

test("Not having a Postgres server running shows a descriptive error", async () => {
  // Arrange
  const credentials: DatabaseCredentials = {
    host: "test_host",
    port: 1234,
    database: "test_database",
    user: "test_user",
    password: "test_passwrod",
  };
  const result = `Postgres: Ensure your environment has a Postgres server. If using Docker, verify that the host called test_host matches the Docker container name of the database`;

  // Act
  const test = () => postgresClient(credentials);

  // Assert
  await expect(test).rejects.toThrowError(result);
});
