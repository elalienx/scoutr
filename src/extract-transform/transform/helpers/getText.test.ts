// Node modules
import { expect, test } from "vitest";
import { load as CheerioLoad } from "cheerio";

// Project files
import getText from "./getText";
import { profile1 } from "../../test-data/profile1";

test("Returns the text when a selector is found", () => {
  // Arrange
  const document = CheerioLoad(profile1);
  const selector = "h1";
  const result = "Eduardo Alvarez Nowak";

  // Act
  const test = getText(document, selector);

  // Assert
  expect(test).toBe(result);
});

test("Returns an empty string if the selector is not found", () => {
  // Arrange
  const document = CheerioLoad(profile1);
  const selector = ".this-selector-does-not-exist";
  const result = "";

  // Act
  const test = getText(document, selector);

  // Assert
  expect(test).toBe(result);
});
