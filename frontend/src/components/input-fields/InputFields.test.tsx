// Node modules
import { expect, test } from "vitest";

// Project files
import InputFields from "./InputFields";
import { render, screen } from "scripts/testing-library-globals";
import InputField from "types/InputField";

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
      type: "input-text",
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
      type: "input-text",
      name: "customer_name",
      label: "Customer Name",
      placeholder: "Jhon Smith",
      defaultValue: "",
    },
    {
      type: "input-text",
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

test("Return 1 input field and 1 textarea when passed data", () => {
  // Arrange
  const fields: InputField[] = [
    {
      type: "input-text",
      name: "customer_name",
      label: "Customer Name",
      placeholder: "Jhon Smith",
      defaultValue: "",
    },
    {
      type: "text-area",
      name: "comment",
      label: "Your comments",
      placeholder: "The food in this restaurant was great",
      defaultValue: "",
    },
  ];
  render(<InputFields fields={fields} />);

  // Act
  const input = screen.getByTestId("input-text");
  const textbox = screen.getByTestId("text-area");

  // Assert
  expect(input).toBeInTheDocument();
  expect(textbox).toBeInTheDocument();
});
