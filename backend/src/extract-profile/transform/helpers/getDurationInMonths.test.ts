// Node modules
import { expect, test } from "vitest";

// Project files
import getDurationInMonths from "./getDurationInMonths";

test("Returns the correct number of months from LinkedIn job duration with years and months", () => {
  // Arrange
  const text = "2 yrs 9 mos";
  const result = 33; // 2 years are 24 months + 9 months = 33

  // Act
  const test = getDurationInMonths(text);

  // Assert
  expect(test).toBe(result);
});

test("Returns the correct number of months from LinkedIn job duration with only years", () => {
  // Arrange
  const text = "2 yrs";
  const result = 24;

  // Act
  const test = getDurationInMonths(text);

  // Assert
  expect(test).toBe(result);
});

test("Returns the correct number of months from LinkedIn job duration with a single year", () => {
  // Arrange
  const text = "1 yr";
  const result = 12;

  // Act
  const test = getDurationInMonths(text);

  // Assert
  expect(test).toBe(result);
});

test("Returns the correct number of months from LinkedIn job durationwith a single month", () => {
  // Arrange
  const text = "1 mo";
  const result = 1;

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
