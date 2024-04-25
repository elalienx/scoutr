// Node modules
import { expect, test } from "vitest";

// Project files
import monthsToYears from "./monthsToYears";

test("Expect value of 0 to display 0", () => {
  // Arrange
  const value = 0;
  const result = "0Y 0M";

  // Act
  const test = monthsToYears(value);

  // Assert
  expect(test).toBe(result);
});

test("Expect values shorter than a year to display as they are", () => {
  // Arrange
  const value = 6;
  const result = "0Y 6M";

  // Act
  const test = monthsToYears(value);

  // Assert
  expect(test).toBe(result);
});

test("Expect the value of 12 to be converted correctly", () => {
  // Arrange
  const value = 12;
  const result = "1Y 0M";

  // Act
  const test = monthsToYears(value);

  // Assert
  expect(test).toBe(result);
});

test("Expect values larger than a year to be converted correctly", () => {
  // Arrange
  const valueA = 33;
  const valueB = 42;
  const valueC = 69;
  const resultA = "2Y 9M"; // 2 years = 24 months + 9 months = 33 months
  const resultB = "3Y 6M"; // 3 years = 36 months + 6 months = 42 months
  const resultC = "5Y 9M"; // 5 years = 60 months + 9 months = 69 months

  // Act
  const testA = monthsToYears(valueA);
  const testB = monthsToYears(valueB);
  const testC = monthsToYears(valueC);

  // Assert
  expect(testA).toBe(resultA);
  expect(testB).toBe(resultB);
  expect(testC).toBe(resultC);
});
