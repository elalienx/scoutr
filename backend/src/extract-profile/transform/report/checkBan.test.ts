// Node modules
import { expect, test } from "vitest";

// Project files
import checkBan from "./checkBan";
import ReportLog from "../../../types/ReportLog";
import ReportSeverity from "../../../types/ReportSeverity";
import { bannedPage } from "../../_test-websites/bannedPage";
import { profile1 } from "../../_test-websites/profile1";

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