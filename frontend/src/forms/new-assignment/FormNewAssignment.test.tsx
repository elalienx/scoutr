// Node modules
import { expect, test } from "vitest";

// Project files
import {
  fireEvent,
  render,
  screen,
  waitFor,
} from "scripts/testing-library/assignments-page-globals";
import FormNewAssignment from "./FormNewAssignment";
import mockFetchAssignment from "scripts/mocks/mockFetchAssignment";
import mockFetchError from "scripts/mocks/mockFetchError";

test("Filling the formulary correctly submits the assignment", async () => {
  // Arrange
  const mockFetchScript = mockFetchAssignment;
  const value1 = "Software Developer";
  const value2 = "Qualcom";
  const result = "Assignment created";

  render(<FormNewAssignment fetchScript={mockFetchScript} />);

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

test("Getting an error from server shows error state", async () => {
  // Arrange
  const mockFetchScript = mockFetchError;
  const value1 = "Software Developer";
  const value2 = "Qualcom";
  const result = "Could not create assignment";

  render(<FormNewAssignment fetchScript={mockFetchScript} />);

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
