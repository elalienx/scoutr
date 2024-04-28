// Node modules
import { expect, test } from "vitest";

// Project files
import useMockError from "./useMockError";
import Status from "types/Status";

test("Expect return error if passed an url", () => {
  // Arrange
  const uri = "api/example/";
  const resultStatus: Status = "error";
  const resultMessage = "Can't load api/example";

  // Act
  const test = useMockError(uri);

  // Assert
  expect(test.status).toBe(resultStatus);
  expect(test.message).toBe(resultMessage);
});
