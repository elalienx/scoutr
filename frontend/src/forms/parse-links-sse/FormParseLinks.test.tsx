// Node modules
import { expect, test } from "vitest";

// Project files
import {
  fireEvent,
  render,
  screen,
  waitFor,
} from "scripts/testing-library/assignments-page-globals";
import mockFetchError from "scripts/fetch-service/mocks/mockFetchError";
import mockFetchOneCandidate from "scripts/fetch-service/mocks/mockFetchOneCandidate";
import Candidate from "types/Candidate";
import FormParseLinks from "./FormParseLinks";
import mockFetchManyCandidates from "scripts/fetch-service/mocks/mockFetchManyCandidates";
import CandidateActions from "types/CandidateActions";

test("Filling the formulary with 1 valid link returns the scanned profile", async () => {
  // Arrange
  const assignment_id = 1;
  const candidates: Candidate[] = [];
  const dispatch = (actions: CandidateActions) => {
    [...candidates, actions.payload];
  };
  const value = "https://www.linkedin.com/in/eduardo-alvarez-nowak/";
  const result = "LinkedIn profiles scanned";

  render(
    <FormParseLinks fetchScript={mockFetchOneCandidate} id={assignment_id} dispatch={dispatch} />,
  );

  // Act
  const formStatus = screen.getByTestId("status");
  const textarea = screen.getByRole("textbox", { name: /unparsed_links/i });
  const button = screen.getByRole("button", { name: /create/i });

  fireEvent.change(textarea, { target: { value: value } });
  fireEvent.click(button);

  // Assert
  await waitFor(() => {
    expect(formStatus).toHaveTextContent(result);
  });
});

test.todo(
  "Filling the formulary with multiple valid links returns the scanned profiles",
  async () => {
    // Arrange
    const assignment_id = 1;
    const candidates: Candidate[] = [];
    const dispatch = (actions: CandidateActions) => {
      [...candidates, actions.payload];
    };
    // values separated with a comma and a empty space on purpose. Note that is not an array, FormCandidate should convert it to the appropiate data format.
    const value =
      "https://www.linkedin.com/in/eduardo-alvarez-nowak/, https://www.linkedin.com/in/susanna-vaara-0b33b03a/ https://www.linkedin.com/in/lanahaddad87/";
    const result = "LinkedIn profiles scanned";

    render(
      <FormParseLinks
        fetchScript={mockFetchManyCandidates}
        id={assignment_id}
        dispatch={dispatch}
      />,
    );

    // Act
    const formStatus = screen.getByTestId("status");
    const textarea = screen.getByRole("textbox", { name: /unparsed_links/i });
    const button = screen.getByRole("button", { name: /create/i });

    fireEvent.change(textarea, { target: { value: value } });
    fireEvent.click(button);

    // Assert
    await waitFor(() => {
      expect(formStatus).toHaveTextContent(result);
    });
  },
);

test("Getting an error from server shows error state", async () => {
  // Arrange
  const assignment_id = 1;
  const candidates: Candidate[] = [];
  const dispatch = (actions: CandidateActions) => {
    [...candidates, actions.payload];
  };
  const value = "linkedin.com/invalid-profile";
  const result = "Could not scan LinkedIn profiles";

  render(<FormParseLinks fetchScript={mockFetchError} id={assignment_id} dispatch={dispatch} />);

  // Act
  const formStatus = screen.getByTestId("status");
  const textarea = screen.getByRole("textbox", { name: /unparsed_links/i });
  const button = screen.getByRole("button", { name: /create/i });

  fireEvent.change(textarea, { target: { value: value } });
  fireEvent.click(button);

  // Assert
  await waitFor(() => {
    expect(formStatus).toHaveTextContent(result);
  });
});
