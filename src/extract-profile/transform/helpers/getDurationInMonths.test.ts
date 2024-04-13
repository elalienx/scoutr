// Node modules
import { expect, test } from "vitest";

// Project files
import getDurationInMonths from "./getDurationInMonths";

test("Returns the correct number of months from LinkedIn job duration with years and months", () => {
  // Arrange
  const text = "2 years 9 months";
  const result = 69; // 2 years are 24 months + 9 months = 33

  // Act
  const test = getDurationInMonths(text);

  // Assert
  expect(test).toBe(result);
});

test("Returns the correct number of months from LinkedIn job duration with only months", () => {
  // Arrange
  const text = "3 months";
  const result = 3;

  // Act
  const test = getDurationInMonths(text);

  // Assert
  expect(test).toBe(result);
});

test("Does not crash if passed an empty string", () => {
  // Arrange
  const text = "";
  const result = 0;

  // Act
  const test = getDurationInMonths(text);

  // Assert
  expect(test).toBe(result);
});

test("Does not crash if passed an invalid string", () => {
  // Arrange
  const text = "hola";
  const result = 0;

  // Act
  const test = getDurationInMonths(text);

  // Assert
  expect(test).toBe(result);
});
