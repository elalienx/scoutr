// Node modules
import { expect, test } from "vitest";

// Project files
import textAreaToArray from "./textAreaToArray";

test("Pasing null returns empty array ['']", () => {
  // Arrange
  const value = null;
  const result = [""];

  // Act
  const test = textAreaToArray(value);

  // Assert
  expect(test).toEqual(result);
});

test("Converts 1 line of text into a 1 item array", () => {
  // Arrange
  const value = "Hello";
  const result = ["Hello"];

  // Act
  const test = textAreaToArray(value);

  // Assert
  expect(test).toEqual(result);
});

test("Converts 1 line of text with space in the middle into a 2 item array", () => {
  // Arrange
  const value = "Hello World";
  const result = ["Hello", "World"];

  // Act
  const test = textAreaToArray(value);

  // Assert
  expect(test).toEqual(result);
});

test("Converts 2 lines of text into an item array", () => {
  // Arrange
  const value = `
  Hello
  World
  `;
  const result = ["Hello", "World"];

  // Act
  const test = textAreaToArray(value);

  // Assert
  expect(test).toEqual(result);
});

test("Converts a single long string with a comma into an array", () => {
  // Arrange
  const value = `Hello,World`;
  const result = ["Hello", "World"];

  // Act
  const test = textAreaToArray(value);

  // Assert
  expect(test).toEqual(result);
});

test("Removes any user commas and item array", () => {
  // Arrange
  const value = `
    Hello,
    World
    `;
  const result = ["Hello", "World"];

  // Act
  const test = textAreaToArray(value);

  // Assert
  expect(test).toEqual(result);
});
