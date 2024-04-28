// Node modules
import { expect, test } from "vitest";

// Project files
import textAreaToArray from "./textAreaToArray";

test("Converts 1 line of text into a 1 item array", () => {
  // Arrange
  const value = "Hello World";
  const result = ["Hello World"];

  // Act
  const test = textAreaToArray(value);

  // Assert
  expect(test).toEqual(result);
});

test("Converts 2 lines of text into an item array", () => {
  // Arrange
  const value = `
  Hello World
  How Are You?
  `;
  const result = ["Hello World", "How Are You?"];

  // Act
  const test = textAreaToArray(value);

  // Assert
  expect(test).toEqual(result);
});

test("Removes any user commas and item array", () => {
  // Arrange
  const value = `
    Hello World,
    How Are You?
    `;
  const result = ["Hello World", "How Are You?"];

  // Act
  const test = textAreaToArray(value);

  // Assert
  expect(test).toEqual(result);
});
