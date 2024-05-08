// Node modules
import { expect, test } from "vitest";

// Project files
import hasRepeatedIds from "./hasRepeatedIds";

test("Returns TRUE if has an item has a repeated id", () => {
  // Arrange
  const values = ["full_name", "age", "age", "email"]; // age is repeated on purpose
  const result = true;

  // Act
  const test = hasRepeatedIds(values);

  // Assert
  expect(test).toBe(result);
});

test("Returns FALSE if no item has repeated id", () => {
  // Arrange
  const values = ["full_name", "age", "country", "email"];
  const result = false;

  // Act
  const test = hasRepeatedIds(values);

  // Assert
  expect(test).toBe(result);
});
