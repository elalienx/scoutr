// Node modules
import { expect, test } from "vitest";

// Project files
import hasEmpyIds from "./hasEmptyIds";

test("Returns TRUE if single item is empty", () => {
  // Arrange
  const values = [""];
  const result = true;

  // Act
  const test = hasEmpyIds(values);

  // Assert
  expect(test).toBe(result);
});

test("Returns FALSE if single item has a value", () => {
  // Arrange
  const values = ["full_name"];
  const result = false;

  // Act
  const test = hasEmpyIds(values);

  // Assert
  expect(test).toBe(result);
});

test("Returns TRUE if any item is empty", () => {
  // Arrange
  const values = ["full_name", "age", "", "email"]; // third field is empty on purpose
  const result = true;

  // Act
  const test = hasEmpyIds(values);

  // Assert
  expect(test).toBe(result);
});

test("Returns FALSE if no item is empty", () => {
  // Arrange
  const values = ["full_name", "age", "country", "email"];
  const result = false;

  // Act
  const test = hasEmpyIds(values);

  // Assert
  expect(test).toBe(result);
});
