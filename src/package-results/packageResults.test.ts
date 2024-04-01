// Node modules
import { expect, test } from "vitest";

// Project files
import packageResults from "./packageResults";
import ErrorReport from "../types/ErrorReport";
import ResultsAPI from "../types/ResultsAPI";

test("Best scenario, all candidates parsed completely and returns status 200", () => {
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
    data: [
      [1, "Eduardo", "Sample job title"],
      [2, "Alexia", "Fake job title"],
    ],
    status: 200,
    message: "All candidates parsed perfectly",
  };

  // Act
  const test = packageResults(candidateRows, errorReports);

  // Assert
  expect(test).toBe(result);
});
