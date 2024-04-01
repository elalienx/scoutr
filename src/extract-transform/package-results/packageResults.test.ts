// Node modules
import { expect, test } from "vitest";

// Project files
import packageResults from "./packageResults";
import ErrorReport from "../../types/ErrorReport";
import ResultsAPI from "../../types/ResultsAPI";

test("Best scenario, all candidates were parsed and there is not errors", () => {
  // Arrange
  const candidateRows = [
    [1, "Eduardo", "Sample job title"],
    [2, "Alexia", "Fake job title"],
  ];
  const errorReports: ErrorReport[] = [
    { linked_in_url: "linked.com/eduardo", error_severity: 0, error_message: "No problems found" },
    { linked_in_url: "linked.com/alexia", error_severity: 0, error_message: "No problems found" },
  ];
  const result: ResultsAPI = {
    status: 200,
    data: [
      [1, "Eduardo", "Sample job title"],
      [2, "Alexia", "Fake job title"],
    ],
    message: "All candidates parsed perfectly",
  };

  // Act
  const test = packageResults(candidateRows, errorReports);

  // Assert
  expect(test).toEqual(result);
});

test("Warning scenario, all candidates were parsed but there are some warnings", () => {
  // Arrange
  const candidateRows = [
    [1, "Eduardo", ""], // missing job
    [2, "Alexia", "Fake job title"],
  ];
  const errorReports: ErrorReport[] = [
    { linked_in_url: "linked.com/eduardo", error_severity: 1, error_message: "Missing candidate_job_title" },
    { linked_in_url: "linked.com/alexia", error_severity: 0, error_message: "No problems found" },
  ];
  const result: ResultsAPI = {
    status: 200,
    data: [
      [1, "Eduardo", ""],
      [2, "Alexia", "Fake job title"],
    ],
    message: [{ linked_in_url: "linked.com/eduardo", error_severity: 1, error_message: "Missing candidate_job_title" }],
  };

  // Act
  const test = packageResults(candidateRows, errorReports);

  // Assert
  expect(test).toEqual(result);
});

test("Edge case scenario, some candidate was not parsed", () => {
  // Arrange
  const candidateRows = [
    [1, "Eduardo", "Sample job title"], // Candidate failed to parse
  ];
  const errorReports: ErrorReport[] = [
    { linked_in_url: "linked.com/eduardo", error_severity: 0, error_message: "No problems found" },
    { linked_in_url: "linked.com/alexia", error_severity: 2, error_message: "Missing all fields" },
  ];
  const result: ResultsAPI = {
    status: 200,
    data: [[1, "Eduardo", "Sample job title"]],
    message: [{ linked_in_url: "linked.com/alexia", error_severity: 2, error_message: "Missing all fields" }],
  };

  // Act
  const test = packageResults(candidateRows, errorReports);

  // Assert
  expect(test).toEqual(result);
});

test("Bad scenario, no candidates were parsed", () => {
  // Arrange
  const candidateRows = []; // missing all data but auto generated id
  const errorReports: ErrorReport[] = [
    { linked_in_url: "linked.com/eduardo", error_severity: 2, error_message: "Missing all fields" },
    { linked_in_url: "linked.com/alexia", error_severity: 2, error_message: "Missing all fields" },
  ];
  const result: ResultsAPI = {
    status: 500,
    data: [],
    message: "Error parsing links",
  };

  // Act
  const test = packageResults(candidateRows, errorReports);

  // Assert
  expect(test).toEqual(result);
});
