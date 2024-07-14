// Node modules
import { expect, test } from "vitest";

// Project files
import verifyProfileImage from "./verifyProfileImage";

test("Does not crash if recevies an undefined string", () => {
  // Arrange
  const value: string = undefined;
  const result: string = "";

  // Act
  const test = verifyProfileImage(value);

  // Assert
  expect(test).toBe(result);
});

test("Does not crash if receives an empty string", () => {
  // Arrange
  const value = "";
  const result = "";

  // Act
  const test = verifyProfileImage(value);

  // Assert
  expect(test).toBe(result);
});

test("Returns the same string if is a valid LinkedIn profile image URL", () => {
  // Arrange
  const value =
    "https://media.licdn.com/dms/image/D4D03AQHVZ7Cwwlhi9Q/profile-displayphoto-shrink_400_400/0/1708943797507?e=1726099200&v=beta&t=rzm3LJC6zZ-M-zS2lGlp1hY25zGog-5VHJCu8yWyJvQ";
  const result =
    "https://media.licdn.com/dms/image/D4D03AQHVZ7Cwwlhi9Q/profile-displayphoto-shrink_400_400/0/1708943797507?e=1726099200&v=beta&t=rzm3LJC6zZ-M-zS2lGlp1hY25zGog-5VHJCu8yWyJvQ";

  // Act
  const test = verifyProfileImage(value);

  // Assert
  expect(test).toBe(result);
});

test("Returns an empty string if the string has an private LinkedIn image profile", () => {
  // Arrange
  const value = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
  const result = "";

  // Act
  const test = verifyProfileImage(value);

  // Assert
  expect(test).toBe(result);
});
