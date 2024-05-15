// Node modules
import { expect, test } from "vitest";

// Project files
import updateCandidate from "./updateCandidate";

test.todo("Throws error if ID is less than 1, as databases starts with ID 1 upwards");

test.todo("Throws error if any key inside data do not belong to Candidate", () => {
  // Arrange
  const id = 1;
  const data = { candidate_name: "Eduardo Alvarez", assignment_name: "Data Engineers" }; // wrong data on purpose
  const result = "The key assignment_name does not exist in the Candidate table.";

  // Act
  const test = updateCandidate(id, data);

  // Assert
  expect(test).toThrowError(result);
});

test("Returns valid query if we pass one valid key", () => {
  // Arrange
  const id = 1;
  const data = { candidate_name: "Eduardo Alvarez" };
  const result = `UPDATE candidates SET candidate_name = $1 WHERE id = 1 RETURNING *`;

  // Act
  const test = updateCandidate(id, data);

  // Assert
  expect(test).toBe(result);
});

test("Returns valid query if we pass multiple valid keys", () => {
  // Arrange
  const id = 1;
  const data = { candidate_name: "Eduardo Alvarez", notes: "Egocentric but nice person" };
  const result = `UPDATE candidates SET candidate_name = $1, notes = $2 WHERE id = 1 RETURNING *`;

  // Act
  const test = updateCandidate(id, data);

  // Assert
  expect(test).toBe(result);
});
