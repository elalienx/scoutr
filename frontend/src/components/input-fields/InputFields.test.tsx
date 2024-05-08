// Node modules
import { describe, expect, test } from "vitest";

// Project files
import InputFields from "./InputFields";
import { render, screen } from "scripts/testing-library-globals";
import InputField from "types/InputField";

describe("Shows warning text on screen if find any errors", () => {
  test("Shows warning if nothing is passed", () => {
    // Arrange
    const fields: InputField[] = [];
    render(<InputFields fields={fields} />);

    // Act
    const test = screen.getByText("No fields passed"); // This can return <FormStatus error/>

    // Assert
    expect(test).toBeInTheDocument();
  });

  test("Shows warning if field has empty id", () => {
    // Arrange
    const fields: InputField[] = [
      {
        id: "full_name",
        type: "input-text",
        label: "Full name",
        placeholder: "Eduardo Alvarez",
        defaultValue: "",
      },
      {
        id: "",
        type: "input-text",
        label: "Age",
        placeholder: "37",
        defaultValue: "",
      },
    ];
    render(<InputFields fields={fields} />);

    // Act
    const test = screen.getByText("A field has an empty id"); // This can return <FormStatus error/>

    // Assert
    expect(test).toBeInTheDocument();
  });

  test("Shows warning if field has a repeated id", () => {
    // Arrange
    const fields: InputField[] = [
      {
        id: "full_name",
        type: "input-text",
        label: "Full name",
        placeholder: "Eduardo Alvarez",
        defaultValue: "",
      },
      {
        id: "full_name", // this has full_name instead of age on purpose
        type: "input-text",
        label: "Age",
        placeholder: "37",
        defaultValue: "",
      },
    ];
    render(<InputFields fields={fields} />);

    // Act
    const test = screen.getByText("A field has a repeated id"); // This can return <FormStatus error/>

    // Assert
    expect(test).toBeInTheDocument();
  });
});

describe("Correctly rendered input fields", () => {
  test("Return 1 input field when passed data", () => {
    // Arrange
    const fields: InputField[] = [
      {
        id: "customer_name",
        type: "input-text",
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

  test("Returns 2 input fields when passed data", () => {
    // Arrange
    const fields: InputField[] = [
      {
        id: "customer_name",
        type: "input-text",
        label: "Customer Name",
        placeholder: "Jhon Smith",
        defaultValue: "",
      },
      {
        id: "age",
        type: "input-text",
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

  test("Returns 1 input field and 1 textarea when passed data", () => {
    // Arrange
    const fields: InputField[] = [
      {
        id: "customer_name",
        type: "input-text",
        label: "Customer Name",
        placeholder: "Jhon Smith",
        defaultValue: "",
      },
      {
        id: "comment",
        type: "text-area",
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
});
