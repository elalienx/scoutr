// Node modules
import { expect, test } from "vitest";

// Project files
import {
  fireEvent,
  render,
  screen,
  waitFor,
} from "scripts/testing-library/assignments-page-globals";
import FormAssignment from "./FormAssignment";
import mockFetchAssignment from "scripts/fetch-service/mocks/mockFetchAssignment";
import mockFetchError from "scripts/fetch-service/mocks/mockFetchError";

test("Filling the formulary correctly submits the assignment", async () => {
  // Arrange
  const value1 = "Software Developer";
  const value2 = "Qualcom";
  const result = "Assignment created";

  render(<FormAssignment fetchScript={mockFetchAssignment} />);

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
  const value1 = "Software Developer";
  const value2 = "Qualcom";
  const result = "Could not create assignment";

  render(<FormAssignment fetchScript={mockFetchError} />);

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
