// Node modules
import { expect, test } from "vitest";

// Project files
import getJobDuration from "./getJobDuration";

test("Returns the correct value from a job description", () => {
  // Arrange
  const valueA = "Aug 2021 - Present · 3 yrs";
  const valueB = "Nov 2019 - Aug 2021 · 1 yr 10 mos";
  const valueC = "Full-time · 6 yrs 11 mos";

  const resultA = "3 yrs";
  const resultB = "1 yr 10 mos";
  const resultC = "6 yrs 11 mos";

  // Act
  const testA = getJobDuration(valueA);
  const testB = getJobDuration(valueB);
  const testC = getJobDuration(valueC);

  // Assert
  expect(testA).toBe(resultA);
  expect(testB).toBe(resultB);
  expect(testC).toBe(resultC);
});

test("Returns empty string if the job duration is missing", () => {
  // Arrange
  const value = "";
  const result = "";

  // Act
  const test = getJobDuration(value);

  // Assert
  expect(test).toBe(result);
});
