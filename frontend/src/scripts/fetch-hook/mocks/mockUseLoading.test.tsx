// Node modules
import { expect, test } from "vitest";

// Project files
import mockUseLoading from "./mockUseLoading";
import Status from "types/Status";

test("Expect return loading status if passed an url", () => {
  // Arrange
  const uri = "api/example/";
  const result: Status = "loading";

  // Act
  const test = mockUseLoading(uri);

  // Assert
  expect(test.status).toBe(result);
});
