// Node modules
import { expect, test } from "vitest";

// Project files
import stringArrayToURL from "./stringArrayToURL";

test("Giving it an empty array return an error", () => {
  // Arrange
  const value: string[] = [];

  // Act
  const test = () => stringArrayToURL(value);

  // Assert
  expect(test).toThrowError();
});

test("Giving it an array with 1 valid string returns the content as a string", () => {
  // Arrange
  const value: string[] = ["htttp://www.abc.com"];
  const result = "?links=htttp://www.abc.com";

  // Act
  const test = stringArrayToURL(value);

  // Assert
  expect(test).toBe(result);
});

test("Giving it an array with many valid strings returns the content as a string", () => {
  // Arrange
  const value: string[] = ["htttp://www.abc.com", "http://www.cnn.com", "http://www.nbc.com"];
  const result = "?links=htttp://www.abc.com&http://www.cnn.com&http://www.nbc.com";

  // Act
  const test = stringArrayToURL(value);

  // Assert
  expect(test).toBe(result);
});
