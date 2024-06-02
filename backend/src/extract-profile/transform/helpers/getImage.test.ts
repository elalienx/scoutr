// Node modules
import { expect, test } from "vitest";
import { load as CheerioLoad } from "cheerio";

// Project files
import getImage from "./getImage";
import { simpleHTML } from "../test-data/simpleHTML";
import { profile2 } from "../test-data/profile2";

test("Returns a valid image URL", () => {
  // Arrange
  const document = CheerioLoad(simpleHTML);
  const selector = ".placeholder";
  const result = "https://placehold.co/600x400/EEE/31343C";

  // Act
  const test = getImage(document, selector);

  // Assert
  expect(test).toBe(result);
});

test("Does not crash if unable to find an image with the given selector", () => {
  // Arrange
  const document = CheerioLoad(simpleHTML);
  const selector = ".this-selector-does-not-exist";
  const result = "";

  // Act
  const test = getImage(document, selector);

  // Assert
  expect(test).toBe(result);
});

test("Does not return LinkedIn placeholders if the profile or company lacks a picture", () => {
  // Arrange
  const document = CheerioLoad(profile2);
  const selector = ".top-card__profile-image";
  const badImageURL = "static.licdn.com";

  // Act
  const test = getImage(document, selector);

  // Assert
  expect(test).not.toContain(badImageURL);
});
