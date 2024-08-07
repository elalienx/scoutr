// Node modules
import { expect, test } from "vitest";

// Project files
import postgresClient from "./postgresClient";
import DatabaseCredentials from "../types/DatabaseCredentials";

// Real DB
test("Expects an error if the Database server is not running", async () => {
  // Arrange
  const credentials: DatabaseCredentials = {
    host: "my_host",
    port: 0,
    database: "my_database",
    user: "my_user",
    password: "my_password",
  };
  const result = `Postgress: Ensure your environment has a Postgres server. If using Docker, verify that the host called my_host matches the Docker container name of the database`;

  // Act
  const test = await postgresClient(credentials);

  // Assert
  expect(test).toThrowError(result);
});

// Mocks
