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
import fetchAssignment from "mocks/fetchAssignment";
/** import the mocks here... */

test("Filling the formulary correctly submits the assignment", async () => {
  // Arrange
  const value1 = "Software Developer";
  const value2 = "Qualcom";
  const result = "Assignment created";

  render(<FormAssignment fetchScript={fetchAssignment} />);

  // Act
  const input1 = screen.getByRole("textbox", { name: /assignment_name/i });
  const input2 = screen.getByRole("textbox", { name: /company_name/i });
  const button = screen.getByRole("button", { name: /create/i });

  fireEvent.change(input1, { target: { value: value1 } });
  fireEvent.change(input2, { target: { value: value2 } });
  fireEvent.click(button);

  // Assert
  await waitFor(() => {
    expect(screen.getByText(result)).toBeInTheDocument();
  });
});

test.todo("Getting an error from server shows error state", () => {});

test.todo("Waiting for server response shows loading state", () => {});
