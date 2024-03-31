// Node modules
import { expect, test } from "vitest";

// Project files
import getDurationInMonths from "./getDurationInMonths";

test("Returns the correct number of months from LinkedIn job duration  with years and months", () => {
  // Arrange
  const text = "2 yrs 9 mos";
  const result = 33; // 2 years are 24 months + 9 months = 33

  // Act
  const test = getDurationInMonths(text);

  // Assert
  expect(test).toBe(result);
});

test("Returns the correct number of months from LinkedIn job duration with only months", () => {
  // Arrange
  const text = "3 mos";
  const result = 3;

  // Act
  const test = getDurationInMonths(text);

  // Assert
  expect(test).toBe(result);
});

test("Does not crash if pass an empty string", () => {
  // Arrange
  const text = "";
  const result = 0;

  // Act
  const test = getDurationInMonths(text);

  // Assert
  expect(test).toBe(result);
});

test("Does not crash if pass an invalid string", () => {
  // Arrange
  const text = "hola";
  const result = 0;

  // Act
  const test = getDurationInMonths(text);

  // Assert
  expect(test).toBe(result);
});
