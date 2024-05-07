// Node modules
import { expect, test } from "vitest";

// Project files
import gatherFormData from "./gatherFormData";

/**
 * Todo
 * 1. Integrate into FormAssignment and FormCandidates
 * 2. Pass the CI GitHub Action!
 */

test("Fields with repeated names throw error as must be unique", () => {
  // Arrange
  // Mock the form HTML Form
  document.body.innerHTML = `
  <form id="test-form">
    <input type="text" name="name" value="Eduardo" />
    <input type="text" name="name" value="Alvarez" />
  </form>
  `;
  const form = document.getElementById("test-form") as HTMLFormElement;
  const result = "Fields has repeated names";

  // Act
  const test = () => gatherFormData(form);

  // Assert
  expect(test).toThrowError(result);
});

test("Sending valid fields returns a correct object", () => {
  // Arrange
  // Mock the form HTML Form
  document.body.innerHTML = `
  <form id="test-form">
    <input type="text" name="user" value="Eduardo" />
    <input type="text" name="country" value="Sweden" />
  </form>
  `;
  const form = document.getElementById("test-form") as HTMLFormElement;
  const result = { user: "Eduardo", country: "Sweden" };

  // Act
  const test = gatherFormData(form);

  // Assert
  expect(test).toEqual(result);
});
