// Node modules
import { expect, test } from "vitest";

// Project files
import { example } from "./test-data/example";
import extractPage from "./extractPage";

test("Gets all the HTML from Example.com, just to know it can extract any page", async () => {
  // Arrange
  const url = "http://example.com";
  const result = example;

  // Act
  const test = await extractPage(url);

  // Assert
  expect(test).toBe(result);
});

test("Does not crash if url is empty", async () => {
  // Arrange
  const url = "";
  const result = "";

  // Act
  const test = await extractPage(url);

  // Assert
  expect(test).toBe(result);
});

test("Does not crash if unable to find webpage", async () => {
  // Arrange
  const url = "https://www.invalid-page.com/";
  const result = "";

  // Act
  const test = await extractPage(url);

  // Assert
  expect(test).toBe(result);
});
