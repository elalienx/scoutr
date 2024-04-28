// Node modules
import { expect, test } from "vitest";

// Project files
import useMockEmpty from "./useMockEmpty";
import Status from "types/Status";

test("Expect return error if passed an url", () => {
  // Arrange
  const uri = "api/example/";
  const resultStatus: Status = "empty";
  const resultMessage = "Endpoint api/example/ works but does not have data";

  // Act
  const test = useMockEmpty(uri);

  // Assert
  expect(test.status).toBe(resultStatus);
  expect(test.message).toBe(resultMessage);
});
