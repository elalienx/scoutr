// Node modules
import { expect, test } from "vitest";

// Project files
import fetchError from "./fetchError";
import Status from "types/Status";
import packageData from "scripts/forms/packageData";

test("Returns status error when called", async () => {
  // Arrange
  const uri = "/api/some-endpoint";
  const body = ["hello", "world"];
  const options = packageData("POST", body);
  const result: Status = "error";

  // Act
  const test = await fetchError(uri, options);

  // Assert
  expect(test.status).toBe(result);
});
