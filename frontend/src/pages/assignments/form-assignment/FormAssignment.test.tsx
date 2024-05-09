// Node modules
import { expect, test } from "vitest";

// Project files
import {
  fireEvent,
  render,
  screen,
  waitFor,
} from "scripts/testing-library-globals";
import FormAssignment from "./FormAssignment";
import fetchAssignment from "mocks/fetchScriptReadyAssignment";
/** import the mocks here... */

test("Filling the formulary correctly submits the assignment", () => {
  // Arrange
  const value1 = "Software Developer";
  const value2 = "Qualcom";
  const result = "Assignment with ID #1 created";

  render(<FormAssignment fetchScript={fetchAssignment} />);

  // Act
  const input1 = screen.getByRole("textbox", { name: /assignment_name/i });
  const input2 = screen.getByRole("textbox", { name: /company_name/i });
  const button = screen.getByRole("button", { name: /create/i });
  const test = () => screen.getByText(result);

  fireEvent.change(input1, { target: { value: value1 } });
  fireEvent.change(input2, { target: { value: value2 } });
  fireEvent.click(button);
  console.log(test());

  // Assert
  waitFor(() => {
    expect(test).toBeInTheDocument();
  });
});

test.todo("Getting an error from server shows error state", () => {});

test.todo("Waiting for server response shows loading state", () => {});
