// Node modules
import { expect, test } from "vitest";

// Project files
import hasRepeatedNames from "./hasRepeatedNames";

test("Returns TRUE if has an item has a repeated name", () => {
  // Arrange
  const values = ["full_name", "age", "age", "email"]; // age is repeated on purpose
  const result = true;

  // Act
  const test = hasRepeatedNames(values);

  // Assert
  expect(test).toBe(result);
});

test("Returns FALSE if no item has repeated name", () => {
  // Arrange
  const values = ["full_name", "age", "country", "email"];
  const result = false;

  // Act
  const test = hasRepeatedNames(values);

  // Assert
  expect(test).toBe(result);
});
