// Node modules
import { expect, test } from "vitest";

// Project files
import mockUseLoading from "./mockUseLoading";
import StatusPage from "types/StatusPage";

test("Expect return loading status if passed an url", () => {
  // Arrange
  const uri = "api/example/";
  const result: StatusPage = "loading";

  // Act
  const test = mockUseLoading(uri);

  // Assert
  expect(test.status).toBe(result);
});
