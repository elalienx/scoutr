// Node modules
import { expect, test } from "vitest";

// Project files
import trimText from "./trimText";

test("Returns empty is text is not a string", () => {
  // Arrange
  const valueA = undefined;
  const valueB = null;
  const resultA = "";
  const resultB = "";

  // Act
  const testA = trimText(valueA);
  const testB = trimText(valueB);

  // Assert
  expect(testA).toBe(resultA);
  expect(testB).toBe(resultB);
});

test("Returns same string if size is not passed", () => {
  // Arrange
  const value = "Eduardo";
  const result = "Eduardo";

  // Act
  const test = trimText(value);

  // Assert
  expect(test).toBe(result);
});

test("Returns same string if size is 0", () => {
  // Arrange
  const text = "Eduardo";
  const size = 0;
  const result = "Eduardo";

  // Act
  const test = trimText(text, size);

  // Assert
  expect(test).toBe(result);
});

test("Correctly trims a string longer than size", () => {
  // Arrange
  const text = "Eduardo Xavier Alvarez Nowak";
  const size = 8; // long enough to just leave "Eduardo"
  const result = "Eduardo";

  // Act
  const test = trimText(text, size);

  // Assert
  expect(test).toBe(result);
});

test("Does not cash if string is shorter than size", () => {
  // Arrange
  const text = "Eduardo";
  const size = 9999; // a ridicuously long number
  const result = "Eduardo";

  // Act
  const test = trimText(text, size);

  // Assert
  expect(test).toBe(result);
});
