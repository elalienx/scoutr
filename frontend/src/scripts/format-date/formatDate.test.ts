// Node modules
import { expect, test } from "vitest";

// Project files
import formatDate from "./formatDate";

// tutorial: https://www.freecodecamp.org/news/how-to-format-dates-in-javascript/
test("Reject invalid date", () => {
  // Arrange
  const value = "2024-31-04"; // bad because the middle spot is for month
  const result = "";

  // Act
  const test = formatDate(value);

  // Asert
  expect(test).toBe(result);
});

// convert formatDate 2024-04-02 21:00:30.610279 into APR 2
test("Convert a valid date to month and day", () => {
  // Arrange
  const value = "2024-04-02 21:00:30.610279";
  const result = "Apr 02";

  // Act
  const test = formatDate(value);

  // Asert
  expect(test).toBe(result);
});
