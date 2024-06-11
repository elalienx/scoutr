// Node modules
import { expect, test } from "vitest";

// Project files
import type ReportLog from "types/ReportLog";
import ReportSeverity from "types/ReportSeverity";
import MiniProgressWorker from "./MiniProgressWorker";
import { render, screen } from "scripts/testing-library/candidates-page-globals";

test("Adding 1 perfect report shows 1 good scan", () => {
  // Arrange
  const reports: ReportLog[] = [
    {
      url: "linked.com/in/eduardo",
      severity: ReportSeverity.NO_ERROR,
      message: "All good!",
    },
  ];
  const result = "Candidates added × 1";

  render(<MiniProgressWorker reports={reports} />);

  // Act
  const test = screen.queryByText(result);

  // Assert
  expect(test).toBeInTheDocument();
});

test("Adding 1 good enough report shows 1 good scan", () => {
  // Arrange
  const reports: ReportLog[] = [
    {
      url: "linked.com/in/susanna",
      severity: ReportSeverity.MISSING_SOME_FIELDS,
      message: "Missing candidate_job_title",
    },
  ];
  const result = "Candidates added × 1";

  render(<MiniProgressWorker reports={reports} />);

  // Act
  const test = screen.queryByText(result);

  // Assert
  expect(test).toBeInTheDocument();
});

test("Adding 1 perfect report and 1 good enough shows 2 good scans", () => {
  // Arrange
  const reports: ReportLog[] = [
    {
      url: "linked.com/in/eduardo",
      severity: ReportSeverity.NO_ERROR,
      message: "All good!",
    },
    {
      url: "linked.com/in/susanna",
      severity: ReportSeverity.MISSING_SOME_FIELDS,
      message: "Missing candidate_job_title",
    },
  ];
  const result = "Candidates added × 2";

  render(<MiniProgressWorker reports={reports} />);

  // Act
  const test = screen.queryByText(result);

  // Assert
  expect(test).toBeInTheDocument();
});

// Adding 1 of each report type shows 4 scans in total
test("Adding 1 perfect report and 1 good enough shows 2 good scans", () => {
  // Arrange
  const reports: ReportLog[] = [
    {
      url: "linked.com/in/eduardo",
      severity: ReportSeverity.NO_ERROR,
      message: "All good!",
    },
    {
      url: "linked.com/in/ivan",
      severity: ReportSeverity.PRIVATE_PROFILE,
      message: "Profile is private",
    },
    {
      url: "linked.com/in/farzad",
      severity: ReportSeverity.TEMPORAL_BAN,
      message: "Not available",
    },
    {
      url: "linked.com/in/lana",
      severity: ReportSeverity.MISSING_ALL_FIELDS,
      message: "Not available",
    },
  ];
  const result1 = "Candidates added × 1";
  const result2 = "Private profiles × 1";
  const result3 = "Temporally unavailable × 1";
  const result4 = "Failed to add × 1";

  render(<MiniProgressWorker reports={reports} />);

  // Act
  const test1 = screen.queryByText(result1);
  const test2 = screen.queryByText(result2);
  const test3 = screen.queryByText(result3);
  const test4 = screen.queryByText(result4);

  // Assert
  expect(test1).toBeInTheDocument();
  expect(test2).toBeInTheDocument();
  expect(test3).toBeInTheDocument();
  expect(test4).toBeInTheDocument();
});
