// Node modules
import { expect, test } from "vitest";

// Project files
import InputFields from "./InputFields";
import { render, screen } from "scripts/testing-library-globals";

test("Returns warning message if nothing is passed", () => {
  // Arrange
  const fields = [];
  render(<InputFields fields={fields} />);

  // Act
  const test = screen.getByText("No fields passed");

  // Assert
  // @ts-ignore
  expect(test).toBeInTheDocument();
});

test.todo("Return 1 input field when passed data");
test.todo("Return 2 input fields when passed data");
test.todo("Return 1 input field and 1 textare when passed data");
