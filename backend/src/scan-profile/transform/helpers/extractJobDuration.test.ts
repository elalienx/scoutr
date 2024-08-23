// Node modules
import { expect, test } from "vitest";

// Project files
import extractJobDuration from "./extractJobDuration";

test("Should extract years and months from text", () => {
  // Arrange
  const valueA = "January 2015 to January 2020 • 5 years";
  const valueB = "January 2023 to Present • 1 year 2 months";
  const resultA = "5 years";
  const resultB = "1 year 2 months";

  // Act
  const testA = extractJobDuration(valueA);
  const testB = extractJobDuration(valueB);

  // Assert
  expect(testA).toBe(resultA);
  expect(testB).toBe(resultB);
});
