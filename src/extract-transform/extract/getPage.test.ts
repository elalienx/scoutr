// Node modules
import { expect, test } from "vitest";

// Project files
import getPage from "./getPage";
import { example } from "../test-data/example";

test("Gets all the HTML from Example.com, just to know it can extract any page", async () => {
  // Arrange
  const url = "http://example.com";
  const result = example;

  // Act
  const test = await getPage(url);

  // Assert
  expect(test).toBe(result);
});

test("Does not crash if url is empty", async () => {
  // Arrange
  const url = "";
  const result = "";

  // Act
  const test = await getPage(url);

  // Assert
  expect(test).toBe(result);
});

test("Does not crash if unable to find webpage", async () => {
  // Arrange
  const url = "https://www.invalid-page.com/";
  const result = "";

  // Act
  const test = await getPage(url);

  // Assert
  expect(test).toBe(result);
});
