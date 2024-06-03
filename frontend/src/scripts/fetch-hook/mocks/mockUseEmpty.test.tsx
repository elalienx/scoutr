// Node modules
import { expect, test } from "vitest";

// Project files
import mockUseEmpty from "./mockUseEmpty";
import StatusPage from "types/StatusPage";

test("Expect return ready state but with a warning message if passed a correct URI", () => {
  // Arrange
  const uri = "api/example/";
  const resultStatus: StatusPage = "ready";
  const resultMessage = "Endpoint api/example/ works but does not have data";

  // Act
  const test = mockUseEmpty(uri);

  // Assert
  expect(test.status).toBe(resultStatus);
  expect(test.message).toBe(resultMessage);
});
