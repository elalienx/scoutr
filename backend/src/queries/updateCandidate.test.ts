// Node modules
import { expect, test } from "vitest";

// Project files
import updateCandidate from "./updateCandidate";

test("Throws error if data is empty as that would break the query", () => {
  // Arrange
  const id = 1;
  const keys = [];
  const result = "Error: keys passed in empty";

  // Act
  const test = () => updateCandidate(id, keys);

  // Assert
  expect(test).toThrowError(result);
});

test("Returns valid query if we pass one valid key", () => {
  // Arrange
  const id = 1;
  const keys = ["candidate_name"];
  const result = `UPDATE candidates SET candidate_name = $1 WHERE id = 1 RETURNING *`;

  // Act
  const test = updateCandidate(id, keys);

  // Assert
  expect(test).toBe(result);
});

test("Returns valid query if we pass multiple valid keys", () => {
  // Arrange
  const id = 1;
  const keys = ["candidate_name", "notes"];
  const result = `UPDATE candidates SET candidate_name = $1, notes = $2 WHERE id = 1 RETURNING *`;

  // Act
  const test = updateCandidate(id, keys);

  // Assert
  expect(test).toBe(result);
});
