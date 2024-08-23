// Node modules
import { load } from "cheerio";
import { expect, test } from "vitest";

// Project files
import getProfileType from "./getProfileType";
import { profile1 } from "../test-websites/profile1";
import { profile2 } from "../test-websites/profile2";
import { profile3 } from "../test-websites/profile3";
import { profile4 } from "../test-websites/profile4";
import { profile5 } from "../test-websites/profile5";
import extractExperienceSection from "./extractExperienceSection";

test("Correctly detect the profiles type 1, the ones with basic job duration", () => {
  // Arrange
  const values = {
    a: extractExperienceSection(load(profile1)),
    b: extractExperienceSection(load(profile3)),
    c: extractExperienceSection(load(profile5)),
  };
  const result = 1;

  // Act
  const testA = getProfileType(values.a);
  const testB = getProfileType(values.b);
  const testC = getProfileType(values.c);

  // Assert
  expect(testA).toBe(result);
  expect(testB).toBe(result);
  expect(testC).toBe(result);
});

test("Correctly detect the profiles type 2, the ones with detailed job duration", () => {
  // Arrange
  const values = {
    a: extractExperienceSection(load(profile2)),
    b: extractExperienceSection(load(profile4)),
  };
  const result = 2;

  // Act
  const testA = getProfileType(values.a);
  const testB = getProfileType(values.b);

  // Assert
  expect(testA).toBe(result);
  expect(testB).toBe(result);
});
