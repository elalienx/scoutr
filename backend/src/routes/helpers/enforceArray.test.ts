// Node modules
import { expect, test } from "vitest";

// Project files
import enforceArray from "./enforceArray";

test("Getting an empty string throws an error", () => {
  // Arrange
  const query = "";
  const result = "The query is empty";

  // Act
  const test = () => enforceArray(query);

  // Assert
  expect(test).toThrowError(result);
});

test("Passing one link returns an array with it", () => {
  // Arrange
  const query = ["https://www.linkedin.com/in/eduardo-alvarez-nowak/"];
  const result = ["https://www.linkedin.com/in/eduardo-alvarez-nowak/"];

  // Act
  const test = enforceArray(query);

  // Assert
  expect(test).toEqual(result);
});

test("Passing multiple links return an array with them", () => {
  // Arrange
  const query = [
    "https://www.linkedin.com/in/eduardo-alvarez-nowak/",
    "https://www.linkedin.com/in/eduardo-alvarez-nowak/",
    "https://www.linkedin.com/in/eduardo-alvarez-nowak/",
  ];
  const result: string[] = [
    "https://www.linkedin.com/in/eduardo-alvarez-nowak/",
    "https://www.linkedin.com/in/eduardo-alvarez-nowak/",
    "https://www.linkedin.com/in/eduardo-alvarez-nowak/",
  ];

  // Act
  const test = enforceArray(query);

  // Assert
  expect(test).toEqual(result);
});
