// Node modules
import { expect, test } from "vitest";
import { render, screen, waitFor } from "scripts/testing-library/assignments-page-globals";
import { fireEvent } from "scripts/testing-library/assignments-page-globals";

// Project files
import FormParseLinks from "./FormParseLinks";

// Mocks
import MockSSEBan from "scripts/fetch-sse/mocks/mockSSEBan";
import MockSSEEOneCandidate from "scripts/fetch-sse/mocks/mockSSEOneCandidate";
import MockSSEManyCandidates from "scripts/fetch-sse/mocks/mockSSEManyCandidates";

test("Expect 1 profile to scan susscesfully", async () => {
  // Arrange
  const dispatch = () => {};
  const FetchClass = MockSSEEOneCandidate;
  const id = 1;

  const value = "https://www.linkedin.com/in/eduardo-alvarez-nowak/";
  const goodMessage = "Finished adding profiles";
  const badMessage = "profile failed to scan";

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
      const bad = screen.queryByText(badMessage);

      expect(good).toBeInTheDocument();
      expect(bad).not.toBeInTheDocument();
    },
    { timeout: 3000 },
  );
});

test("Expect multiple profiles to scan susscesfully", async () => {
  // Arrange
  const dispatch = () => {};
  const FetchClass = MockSSEManyCandidates;
  const id = 1;

  // values separated with a comma and a empty space on purpose. Note that is not an array, FormCandidate should convert it to the appropiate data format.
  const value =
    "https://www.linkedin.com/in/eduardo-alvarez-nowak/, https://www.linkedin.com/in/susanna-vaara-0b33b03a/ https://www.linkedin.com/in/lanahaddad87/";
  const goodMessage = "Finished adding profiles";
  const badMessage = "profile failed to scan";

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
      const bad = screen.queryByText(badMessage);

      expect(good).toBeInTheDocument();
      expect(bad).not.toBeInTheDocument();
    },
    { timeout: 5000 },
  );
});

test("Expect error message mentioning 2 failed scans", async () => {
  // Arrange
  const dispatch = () => {};
  const FetchClass = MockSSEBan;
  const id = 1;

  // values separated with a comma and a empty space on purpose. Note that is not an array, FormCandidate should convert it to the appropiate data format.
  const value =
    "https://www.linkedin.com/in/eduardo-alvarez-nowak/, https://www.linkedin.com/in/susanna-vaara-0b33b03a/ https://www.linkedin.com/in/lanahaddad87/";
  const result = "Failed to scan: 2";

  render(<FormParseLinks dispatch={dispatch} id={id} FetchClass={FetchClass} />);

  // Act
  const textarea = screen.getByRole("textbox", { name: /unparsed_links/i });
  const button = screen.getByRole("button", { name: /create/i });

  fireEvent.change(textarea, { target: { value: value } });
  fireEvent.click(button);

  // Assert
  await waitFor(
    () => {
      const element = screen.queryByText(result);

      expect(element).toBeInTheDocument();
    },
    { timeout: 5000 },
  );
});
