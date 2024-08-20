// Node modules
import { expect, test } from "vitest";

// Project files
import type StatusPage from "types/StatusPage";
import packageData from "scripts/forms/packageData";
import mockFetchError from "./mockFetchError";

test("Returns status error when called", async () => {
  // Arrange
  const uri = "/api/some-endpoint";
  const body = ["hello", "world"];
  const options = packageData("POST", body);
  const result: StatusPage = "error";

  // Act
  const test = await mockFetchError(uri, options);

  // Assert
  expect(test.status).toBe(result);
});
