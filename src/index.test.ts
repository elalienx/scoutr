// Node modules
import { test, expect } from "vitest";

// Project files
import sumScoutr from "./index";

test("To add 100 to the value passed", () => {
  // Arrange
  const result = "Scoutr Version 101";
  const value = 1;

  // Act
  const test = sumScoutr(value);

  // Assert
  expect(test).toBe(result);
});
