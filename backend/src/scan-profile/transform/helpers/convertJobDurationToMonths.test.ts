// Node modules
import { expect, test } from "vitest";

// Project files
import convertJobDurationToMonths from "./convertJobDurationToMonths";

test("Should do X while Y", () => {
  // Arrange
  const values = {
    a: "1 yrs 2 mos",
    b: "1 mo",
  };
  const results = {
    a: 14, // (12 months + 2 months = 14)
    b: 1,
  };

  // Act
  const testA = convertJobDurationToMonths(values.a);
  const testB = convertJobDurationToMonths(values.b);

  // Assert
  expect(testA).toBe(results.a);
  expect(testB).toBe(results.b);
});
