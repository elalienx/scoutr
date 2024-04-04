// Node modules
import { expect, test } from "vitest";

// Project files
import packageResults from "./packageResults";
import Report from "../../types/Report";
import ResultsAPI from "../../types/ResultsAPI";

test("Best scenario, all candidates were parsed and there is not errors", () => {
  // Arrange
  const candidateRows = [
    { id: 1, name: "Eduardo", title: "Sample job title" },
    { id: 2, name: "Alexia", title: "Fake job title" },
  ];
  const errorReports: Report[] = [
    { linked_in_url: "linked.com/eduardo", severity: 0, message: "No problems found" },
    { linked_in_url: "linked.com/alexia", severity: 0, message: "No problems found" },
  ];
  const result: ResultsAPI = {
    status: 200,
    data: [
      { id: 1, name: "Eduardo", title: "Sample job title" },
      { id: 2, name: "Alexia", title: "Fake job title" },
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
    { id: 1, name: "Eduardo", title: "" }, // missing job
    { id: 2, name: "Alexia", title: "Fake job title" },
  ];
  const errorReports: Report[] = [
    { linked_in_url: "linked.com/eduardo", severity: 1, message: "Missing candidate_job_title" },
    { linked_in_url: "linked.com/alexia", severity: 0, message: "No problems found" },
  ];
  const result: ResultsAPI = {
    status: 200,
    data: [
      { id: 1, name: "Eduardo", title: "" },
      { id: 2, name: "Alexia", title: "Fake job title" },
    ],
    message: [{ linked_in_url: "linked.com/eduardo", severity: 1, message: "Missing candidate_job_title" }],
  };

  // Act
  const test = packageResults(candidateRows, errorReports);

  // Assert
  expect(test).toEqual(result);
});

test("Edge case scenario, some candidate was not parsed", () => {
  // Arrange
  const candidateRows = [
    { id: 1, name: "Eduardo", title: "Sample job title" }, // Candidate failed to parse
  ];
  const errorReports: Report[] = [
    { linked_in_url: "linked.com/eduardo", severity: 0, message: "No problems found" },
    { linked_in_url: "linked.com/alexia", severity: 2, message: "Missing all fields" },
  ];
  const result: ResultsAPI = {
    status: 200,
    data: [{ id: 1, name: "Eduardo", title: "Sample job title" }],
    message: [{ linked_in_url: "linked.com/alexia", severity: 2, message: "Missing all fields" }],
  };

  // Act
  const test = packageResults(candidateRows, errorReports);

  // Assert
  expect(test).toEqual(result);
});

test("Bad scenario, no candidates were parsed", () => {
  // Arrange
  const candidateRows = []; // missing all data but auto generated id
  const errorReports: Report[] = [
    { linked_in_url: "linked.com/eduardo", severity: 2, message: "Missing all fields" },
    { linked_in_url: "linked.com/alexia", severity: 2, message: "Missing all fields" },
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
