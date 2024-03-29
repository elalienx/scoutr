// Node modules
import { expect, test, vi } from "vitest";

// Project files
import initializeDatabase from "./initializeDatabase";
import DatabaseCredentials from "../types/DatabaseCredentials";

vi.mock("pg", () => {
  return {
    Pool() {
      return {
        connect() {
          return '{"name": "mocked"}';
        },
      };
    },
  };
});

test.todo("Shows server down error if database server is not available", () => {
  // Arrange
  let database;
  const credentials: DatabaseCredentials = {
    host: "postgress",
    database: "database",
    port: 1234,
    user: "user",
    password: "password",
  };
  const result = "Error: Can't connect to the database server.";

  // Act
  const test = () => initializeDatabase(database, credentials);

  // Assert
  expect(test).toThrowError(result);
});

// show error if database service is not available (the most prominent error)
// show specific error with info how to fix it
// show generic error if not on our known list
