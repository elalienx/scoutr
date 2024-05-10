// Node modules
import { expect, test } from "vitest";

// Project files
import { fireEvent, render, screen, waitFor } from "scripts/testing-library-globals";
import FormAssignment from "./FormAssignment";
import fetchAssignment from "scripts/fetch-service/mocks/fetchAssignment";
import fetchError from "scripts/fetch-service/mocks/fetchError";

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

test("Getting an error from server shows error state", async () => {
  // Arrange
  const value1 = "Software Developer";
  const value2 = "Qualcom";
  const result = "Could not create new assignment";

  render(<FormAssignment fetchScript={fetchError} />);

  // Act
  const formStatus = screen.getByTestId("status");
  const input1 = screen.getByRole("textbox", { name: /assignment_name/i });
  const input2 = screen.getByRole("textbox", { name: /company_name/i });
  const button = screen.getByRole("button", { name: /create/i });

  fireEvent.change(input1, { target: { value: value1 } });
  fireEvent.change(input2, { target: { value: value2 } });
  fireEvent.click(button);

  // Assert
  await waitFor(() => {
    expect(formStatus).toHaveTextContent(result);
  });
});