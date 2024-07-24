// Node modules
import { expect, test } from "vitest";
import { render, screen, waitFor } from "scripts/testing-library/assignments-page-globals";
import { fireEvent } from "scripts/testing-library/assignments-page-globals";

// Project files
import FormParseLinks from "./FormParseLinks";

// Mocks
import MockSSEEOneCandidate from "scripts/fetch-sse/mocks/mockSSEOneCandidate";
import MockSSEManyCandidates from "scripts/fetch-sse/mocks/mockSSEManyCandidates";

test("Expect 1 profile to scan susscesfully", async () => {
  // Arrange
  const dispatch = () => {};
  const FetchClass = MockSSEEOneCandidate;
  const id = 1;

  const value = "https://www.linkedin.com/in/eduardo-alvarez-nowak/";
  const goodMessage = "Finished searching";

  render(<FormParseLinks dispatch={dispatch} id={id} FetchClass={FetchClass} />);

  // Act
  const textarea = screen.getByRole("textbox", { name: /unparsed_links/i });
  const button = screen.getByRole("button", { name: /create/i });

  fireEvent.change(textarea, { target: { value: value } });
  fireEvent.click(button);

  // Assert
  await waitFor(
    () => {
      const good = screen.queryByText(goodMessage);

      expect(good).toBeInTheDocument();
    },
    { timeout: 500 },
  );
});

test("Expect multiple profiles to scan susscesfully", async () => {
  // Arrange
  const dispatch = () => {};
  const FetchClass = MockSSEManyCandidates;
  const id = 1;

  // A long string with links separated by a comma and a empty space on purpose. FormCandidate should convert it from string to an array of strings
  const value = `https://www.linkedin.com/in/eduardo-alvarez-nowak/, https://www.linkedin.com/in/susanna-vaara-0b33b03a/ https://www.linkedin.com/in/lanahaddad87/`;
  const goodMessage = "Finished searching";

  render(<FormParseLinks dispatch={dispatch} id={id} FetchClass={FetchClass} />);

  // Act
  const textarea = screen.getByRole("textbox", { name: /unparsed_links/i });
  const button = screen.getByRole("button", { name: /create/i });

  fireEvent.change(textarea, { target: { value: value } });
  fireEvent.click(button);

  // Assert
  await waitFor(
    () => {
      const good = screen.queryByText(goodMessage);

      expect(good).toBeInTheDocument();
    },
    { timeout: 500 },
  );
});
