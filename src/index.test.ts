// Node modules
import { expect, test } from "vitest";

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

test("Shows loser message if pass 0 or negative number", () => {
  // Arrange
  const result = "Such a looser!";
  const valueA = 0;
  const valueB = -5;

  // Act
  const testA = sumScoutr(valueA);
  const testB = sumScoutr(valueB);

  // Assert
  expect(testA).toBe(result);
  expect(testB).toBe(result);
});
