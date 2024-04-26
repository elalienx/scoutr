// Node modules
import { expect, test } from "vitest";

// Project files
import useFetchMock from "./useFetchMock";

test("Shows loading while fetching data", () => {
  // Arrange
  const url: string = "www.loading.com";
  const result = { data: [], status: "loading", message: "" };

  // Act
  const test = useFetchMock(url);

  // Assert
  expect(test).toEqual(result);
});

test("Shows error when fetch fails", () => {
  // Arrange
  const url: string = "www.error.com";
  const result = { data: [], status: "error", message: "" };

  // Act
  const test = useFetchMock(url);

  // Assert
  expect(test).toEqual(result);
});

test("Shows empty when fetch is done but there is no content", () => {
  // Arrange
  const url: string = "www.empty.com";
  const result = { data: [], status: "empty", message: "" };

  // Act
  const test = useFetchMock(url);

  // Assert
  expect(test).toEqual(result);
});

test("Shows content when fetch is done and there is content", () => {
  // Arrange
  const url: string = "www.content.com";
  const result = { data: [1, 2, 3], status: "content", message: "" };

  // Act
  const test = useFetchMock(url);

  // Assert
  expect(test).toEqual(result);
});
