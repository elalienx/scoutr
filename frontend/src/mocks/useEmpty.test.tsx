// Node modules
import { expect, test } from "vitest";

// Project files
import useEmpty from "./useEmpty";
import Status from "types/Status";

test("Expect return empty state if passed an url", () => {
  // Arrange
  const uri = "api/example/";
  const resultStatus: Status = "empty";
  const resultMessage = "Endpoint api/example/ works but does not have data";

  // Act
  const test = useEmpty(uri);

  // Assert
  expect(test.status).toBe(resultStatus);
  expect(test.message).toBe(resultMessage);
});
