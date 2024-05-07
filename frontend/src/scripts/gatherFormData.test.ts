// Node modules
import { expect, test } from "vitest";

// Project files
import gatherFormData, { gatherFormData2 } from "./gatherFormData";
import InputField from "types/InputField";

/**
 * Todo
 * 1. Conver the gatherFormData1 into gatherFormData2
 * 2. See if I can rename the test .tsx to render better mock forms.
 */

test("Fields with empty name throw error", () => {
  // Arrange
  const value: InputField[] = [
    {
      type: "input-text",
      name: "",
      label: "Name",
      placeholder: "Eduardo",
      defaultValue: "",
    },
  ];
  const result = "Fields has empty names";

  // Act
  const test = () => gatherFormData(value);

  // Assert
  expect(test).toThrowError(result);
});

test("Fields with repeated names throw error as must be unique", () => {
  // Arrange
  const value: InputField[] = [
    {
      type: "input-text",
      name: "name",
      label: "First name",
      placeholder: "Eduardo",
      defaultValue: "",
    },
    {
      type: "input-text",
      name: "name",
      label: "Last name",
      placeholder: "Alvarez",
      defaultValue: "",
    },
  ];

  const result = "Fields has repeated names";

  // Act
  const test = () => gatherFormData(value);

  // Assert
  expect(test).toThrowError(result);
});

test("Sending valid fields returns a correct object", () => {
  // Arrange
  // Mock the form HTML Form
  document.body.innerHTML = `
  <form id="test-form">
    <input type="text" name="user" value="Eduardo">
    <input type="text" name="country" value="Sweden">
  </form>
  `;
  const form = document.getElementById("test-form") as HTMLFormElement;
  const result = { user: "Eduardo", country: "Sweden" };

  // Act
  const test = gatherFormData2(form);

  // Assert
  expect(test).toEqual(result);
});
