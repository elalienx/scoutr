// Node modules
import { expect, test } from "vitest";

// Project files
import mockUseError from "./mockUseError";
import Status from "types/Status";

test("Expect return error state if passed a uri that fails to fetch", () => {
  // Arrange
  const uri = "api/example/";
  const resultStatus: Status = "error";
  const resultMessage = "Can't load api/example/";

  // Act
  const test = mockUseError(uri);

  // Assert
  expect(test.status).toBe(resultStatus);
  expect(test.message).toBe(resultMessage);
});

test("Expect a message explaining you passed a empty uri", () => {
  // Arrange
  const uri = "";
  const resultStatus: Status = "error";
  const resultMessage = "URI is empty";

  // Act
  const test = mockUseError(uri);

  // Assert
  expect(test.status).toBe(resultStatus);
  expect(test.message).toBe(resultMessage);
});
