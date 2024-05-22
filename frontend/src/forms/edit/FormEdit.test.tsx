// Node modules
import { expect, test } from "vitest";

// Project files
import {
  fireEvent,
  render,
  screen,
  waitFor,
} from "scripts/testing-library/assignments-page-globals";
import FormEdit from "./FormEdit";
import mockFetchError from "scripts/fetch-service/mocks/mockFetchError";
import InputField from "types/InputField";
import mockFetchEditCandidat from "scripts/fetch-service/mocks/mockFetchEditCandidate";

test("Filling the formulary correctly submits the assignment", async () => {
  // Arrange
  // -- Initialization parameter
  const id = 1;
  const uri = "/api/candidates/";
  const fields: InputField[] = [
    {
      id: "candidate_name",
      type: "input-text",
      label: "Full name",
      placeholder: "Jhon Doe",
      defaultValue: "Xavier Nowak",
    },
    {
      id: "candidate_job_title",
      type: "input-text",
      label: "Full name",
      placeholder: "Jhon Doe",
      defaultValue: "Teaching Assistant",
    },
  ];
  const fetchScript = mockFetchEditCandidat;
  const mockDispatcher = () => {};

  // -- User input
  const value1 = "Eduardo Alvarez";
  const value2 = "Graphic Designer";

  // -- Result
  const result = "Edited candidate";

  // -- Render
  render(
    <FormEdit
      fetchScript={fetchScript}
      id={id}
      uri={uri}
      fields={fields}
      dispatcher={mockDispatcher}
    />,
  );

  // Act
  const formStatus = screen.getByTestId("status");
  const input1 = screen.getByRole("textbox", { name: fields[0].id });
  const input2 = screen.getByRole("textbox", { name: fields[1].id });
  const button = screen.getByRole("button", { name: /update/i });

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
  // -- Initialization parameter
  const id = 1;
  const uri = "/api/candidates/";
  const fields: InputField[] = [
    {
      id: "candidate_name",
      type: "input-text",
      label: "Full name",
      placeholder: "Jhon Doe",
      defaultValue: "Xavier Nowak",
    },
    {
      id: "candidate_job_title",
      type: "input-text",
      label: "Full name",
      placeholder: "Jhon Doe",
      defaultValue: "Teaching Assistant",
    },
  ];
  const fetchScript = mockFetchError;
  const mockDispatcher = () => {};

  // -- User input
  const value1 = "Eduardo Alvarez";
  const value2 = "Graphic designer";

  // -- Result
  const result = "Could not save changes";

  // -- Render
  render(
    <FormEdit
      fetchScript={fetchScript}
      id={id}
      uri={uri}
      fields={fields}
      dispatcher={mockDispatcher}
    />,
  );

  // Act
  const formStatus = screen.getByTestId("status");
  const input1 = screen.getByRole("textbox", { name: fields[0].id });
  const input2 = screen.getByRole("textbox", { name: fields[1].id });
  const button = screen.getByRole("button", { name: /update/i });

  fireEvent.change(input1, { target: { value: value1 } });
  fireEvent.change(input2, { target: { value: value2 } });
  fireEvent.click(button);

  // Assert
  await waitFor(() => {
    expect(formStatus).toHaveTextContent(result);
  });
});
