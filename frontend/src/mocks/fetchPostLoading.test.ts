// Node modules
import { expect, test } from "vitest";

// Project files
import fetchPostLoading from "./fetchPostLoading";
import Status from "types/Status";

test("Returns a loading state inmediatelly", async () => {
  // Arrange
  const uri = "www.loading.com";
  const result: Status = "loading";

  // Act
  const test = await fetchPostLoading(uri, {});

  // Assert
  expect(test.status).toBe(result);
});
