// Node modules
import { expect, test } from "vitest";

// Project files
import trimText from "./trimText";

test("Should cut text longer than the size selected", () => {
  // Arrange
  const text = "Hello World";
  const size = 7; // to cut "orld" from world on purpose
  const result = "Hello W";

  // Act
  const test = trimText(text, size);

  // Assert
  expect(test).toBe(result);
});

test("Should return the same string if size is not selected", () => {
  // Arrange
  const text = "Hello";
  const result = "Hello";

  // Act
  const test = trimText(text);

  // Assert
  expect(test).toBe(result);
});

test("Shoud not crash if text is empty", () => {
  // Arrange
  const text = "";
  const result = "";

  // Act
  const test = trimText(text);

  // Assert
  expect(test).toBe(result);
});

test("Shoud not crash if text is undefined", () => {
  // Arrange
  const text = undefined;
  const result = "";

  // Act
  const test = trimText(text);

  // Assert
  expect(test).toBe(result);
});

test("Shoud not crash if text is null", () => {
  // Arrange
  const text = null;
  const result = "";

  // Act
  const test = trimText(text);

  // Assert
  expect(test).toBe(result);
});
