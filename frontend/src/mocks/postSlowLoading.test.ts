// Node modules
import { expect, test } from "vitest";

// Project files
import postSlowLoading from "./postSlowLoading";
import Status from "types/Status";

test("Returns a loading state inmediatelly", async () => {
  // Arrange
  const uri = "www.loading.com";
  const result: Status = "loading";

  // Act
  const test = await postSlowLoading(uri, {});

  // Assert
  expect(test.status).toBe(result);
});
