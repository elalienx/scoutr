// Node modules
import { expect, test } from "vitest";

// Project files
import getPrimaryJob from "./getPrimaryJob";

test("Remove text after the sign: comma (,)", () => {
  // Arrange
  const text = "Frontend Developer, Backend Developer, Data Engineer";
  const result = "Frontend Developer";

  // Act
  const test = getPrimaryJob(text);

  // Assert
  expect(test).toBe(result);
});

test("Remove text after the sign: at (@)", () => {
  // Arrange
  const text = "Data Engineer @TriOptima";
  const result = "Data Engineer";

  // Act
  const test = getPrimaryJob(text);

  // Assert
  expect(test).toBe(result);
});

test("Remove text after the preposition: at", () => {
  // Arrange
  const text = "Senior Data Analyst at Volvo Cars";
  const result = "Senior Data Analyst";

  // Act
  const test = getPrimaryJob(text);

  // Assert
  expect(test).toBe(result);
});

test("Remove text after the swedish preposition: på", () => {
  // Arrange
  const text = "Utvecklare på företag";
  const result = "Utvecklare";

  // Act
  const test = getPrimaryJob(text);

  // Assert
  expect(test).toBe(result);
});
