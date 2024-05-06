// Node modules
import { expect, test } from "vitest";

// Project files
import InputFields from "./InputFields";
import { render, screen } from "scripts/testing-library-globals";
import InputField from "types/InputField";

/**
 * Todo:
 * 1. Make inteface InputField so InputText and TextArea are compatible with this component.
 * 2. Add interface InputText for the unique options like type text, number, password?
 * 3. Add intefface TextArea for the unique options like rows columns, etc? (rows & columns should be handled via CSS)
 * 4. Combining the fields.json and the user_data (what is written on prexisting forms) should be done outisde this component
 */

test("Returns warning message if nothing is passed", () => {
  // Arrange
  const fields: InputField[] = [];
  render(<InputFields fields={fields} />);

  // Act
  const test = screen.getByText("No fields passed"); // This can return <FormStatus error/>

  // Assert
  expect(test).toBeInTheDocument();
});

test("Return 1 input field when passed data", () => {
  // Arrange
  const fields: InputField[] = [
    {
      type: "InputText",
      name: "customer_name",
      label: "Customer Name",
      placeholder: "Jhon Smith",
      defaultValue: "",
    },
  ];
  render(<InputFields fields={fields} />);

  // Act
  const label = screen.getByText(/customer name/i, { selector: ".label" });
  const input = screen.getByPlaceholderText(/jhon smith/i);

  // Assert
  expect(label).toBeInTheDocument();
  expect(input).toBeInTheDocument();
});
test("Return 2 input fields when passed data", () => {
  // Arrange
  const fields: InputField[] = [
    {
      type: "InputText",
      name: "customer_name",
      label: "Customer Name",
      placeholder: "Jhon Smith",
      defaultValue: "",
    },
    {
      type: "InputText",
      name: "age",
      label: "Your age",
      placeholder: "You must be older than 18",
      defaultValue: "",
    },
  ];
  render(<InputFields fields={fields} />);

  // Act
  const labelA = screen.getByText(/customer name/i, { selector: ".label" });
  const inputA = screen.getByPlaceholderText(/jhon smith/i);
  const labelB = screen.getByText(/your age/i, { selector: ".label" });
  const inputB = screen.getByPlaceholderText(/you must be older than 18/i);

  // Assert
  expect(labelA).toBeInTheDocument();
  expect(inputA).toBeInTheDocument();
  expect(labelB).toBeInTheDocument();
  expect(inputB).toBeInTheDocument();
});
test.todo("Return 1 input field and 1 textarea when passed data");
