// Node modules
import { expect, test } from "vitest";

// Project files
import extractJobDuration from "./extractJobDuration";

test("Should extract years and months from text", () => {
  // Arrange
  const values = {
    a: "January 2015 to January 2020 • 5 years",
    b: "January 2023 to Present • 1 year 2 months",
    c: "February 2023 to Present • 1 yr 1 mo", // uses abreviations for year and month
  };
  const results = {
    a: "5 years",
    b: "1 year 2 months",
    c: "1 yr 1 mo",
  };

  // Act
  const testA = extractJobDuration(values.a);
  const testB = extractJobDuration(values.b);
  const testC = extractJobDuration(values.c);

  // Assert
  expect(testA).toBe(results.a);
  expect(testB).toBe(results.b);
  expect(testC).toBe(results.c);
});

test("Should return the same string if it does not contain dates", () => {
  // Arrange
  const value = "Hello"; // bad text, has no dates
  const result = "Hello"; // just return it as it is

  // Act
  const test = extractJobDuration(value);

  // Assert
  expect(test).toBe(result);
});

test("Should not crash if text is empty", () => {
  // Arrange
  const value = "";
  const result = "";

  // Act
  const test = extractJobDuration(value);

  // Assert
  expect(test).toBe(result);
});
