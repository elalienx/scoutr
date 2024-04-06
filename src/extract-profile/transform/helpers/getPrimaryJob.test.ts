// Node modules
import { expect, test } from "vitest";

// Project files
import getPrimaryJobTitle from "./getPrimaryJob";

test("Removes text after the sign: comma (,)", () => {
  // Arrange
  const text = "Frontend Developer, Backend Developer, Data Engineer";
  const result = "Frontend Developer";

  // Act
  const test = getPrimaryJobTitle(text);

  // Assert
  expect(test).toBe(result);
});

test("Removes text after the symbol: at (@)", () => {
  // Arrange
  const text = "Data Engineer @TriOptima";
  const result = "Data Engineer";

  // Act
  const test = getPrimaryJobTitle(text);

  // Assert
  expect(test).toBe(result);
});

test("Removes text after the preposition: at", () => {
  // Arrange
  const text = "Senior Data Analyst at Volvo Cars";
  const result = "Senior Data Analyst";

  // Act
  const test = getPrimaryJobTitle(text);

  // Assert
  expect(test).toBe(result);
});

test("Removes text after the Swedish preposition: på", () => {
  // Arrange
  const text = "Utvecklare på företag";
  const result = "Utvecklare";

  // Act
  const test = getPrimaryJobTitle(text);

  // Assert
  expect(test).toBe(result);
});
