// Node modules
import { expect, test } from "vitest";

// Project files
import calculatePercentage from "./calculatePercentage";

test("Two empty values return a response rate of 0", () => {
  // Arrange
  const valueA = 0;
  const valueB = 0;
  const result = 0;

  // Act
  const test = calculatePercentage(valueA, valueB);

  // Assert
  expect(test).toBe(result);
});

test("Passing correct values return the correct percentage", () => {
  // Arrange
  const group1 = {
    valueA: 25,
    valueB: 100,
    result: 25,
  };
  const group2 = {
    valueA: 50,
    valueB: 100,
    result: 50,
  };
  // round up decimals
  const group3 = {
    valueA: 33,
    valueB: 100,
    result: 33,
  };

  // Act
  const test1 = calculatePercentage(group1.valueA, group1.valueB);
  const test2 = calculatePercentage(group2.valueA, group2.valueB);
  const test3 = calculatePercentage(group3.valueA, group3.valueB);

  // Assert
  expect(test1).toBe(group1.result);
  expect(test2).toBe(group2.result);
  expect(test3).toBe(group3.result);
});

test("The minor value being bigger throws an error", () => {
  // Arrange
  const valueA = 500;
  const valueB = 100;
  const result = "Ammount cannot be bigger than total.";

  // Act
  const test = () => calculatePercentage(valueA, valueB);

  // Assert
  expect(test).toThrowError(result);
});
