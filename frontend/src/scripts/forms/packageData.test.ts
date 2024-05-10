// Node modules
import { expect, test } from "vitest";

// Project files
import packageData from "./packageData";
import FetchMethods from "types/FetchMethods";

test("Throws error if body is empty", () => {
  // Arrange
  const method: FetchMethods = "POST";
  const body = {};
  const result = "Body is empty";

  // Act
  const test = () => packageData(method, body);

  // Assert
  expect(test).toThrowError(result);
});

test("Successfully serializes body", () => {
  // Arrange
  const method: FetchMethods = "POST";
  const body = { name: "Eduardo", age: 37 };
  const result = `{"name":"Eduardo","age":37}`; // no space between at all on purpose

  // Act
  const test = packageData(method, body);

  // Assert
  expect(test.body).toBe(result);
});
