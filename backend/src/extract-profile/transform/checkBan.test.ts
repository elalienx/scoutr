// Node modules
import { expect, test } from "vitest";

// Project files
import type ReportLog from "../../types/ReportLog";
import ReportSeverity from "../../types/ReportSeverity";
import { bannedPage } from "./test-data/bannedPage";
import { profile1 } from "./test-data/profile1";
import checkBan from "./checkBan";

test("Returns the correct type of report when sent a banned LinkedIn page", () => {
  // Arrange
  const report: ReportLog = {
    url: "https://www.linkedin.com/in/eduardo-alvarez-nowak/", // hypothetical example, my profile actually has all keys
    severity: ReportSeverity.MISSING_ALL_FIELDS,
    message: "Missing all fields",
  };
  const page = bannedPage;
  const result: ReportLog = {
    url: "https://www.linkedin.com/in/eduardo-alvarez-nowak/",
    severity: ReportSeverity.TEMPORAL_BAN,
    message: "Temporally suspended",
  };

  // Act
  const test = checkBan(report, page);

  // Assert
  expect(test).toEqual(result);
});

test("Returns the standard type of report (missing all fields) when is not a bannedPage LinkedIn page", () => {
  // Arrange
  const report: ReportLog = {
    url: "https://www.linkedin.com/in/eduardo-alvarez-nowak/", // hypothetical example, my profile actually has all keys
    severity: ReportSeverity.MISSING_ALL_FIELDS,
    message: "Missing all fields",
  };
  const page = profile1;
  const result: ReportLog = {
    url: "https://www.linkedin.com/in/eduardo-alvarez-nowak/",
    severity: ReportSeverity.MISSING_ALL_FIELDS,
    message: "Missing all fields",
  };

  // Act
  const test = checkBan(report, page);

  // Assert
  expect(test).toEqual(result);
});
