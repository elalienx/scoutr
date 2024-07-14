// Node modules
import { expect, test } from "vitest";

// Project files
import checkPrivateProfile from "./checkPrivateProfile";
import ReportLog from "../../types/ReportLog";
import ReportSeverity from "../../types/ReportSeverity";
import { privateProfile } from "../_test-websites/profilePrivate";
import { profile1 } from "../_test-websites/profile1";

test("Returns the correct type of report when sent a private LinkedIn page", () => {
  // Arrange
  const report: ReportLog = {
    url: "https://www.linkedin.com/in/ivanahmadfatoni/",
    severity: ReportSeverity.MISSING_ALL_FIELDS,
    message: "",
  };
  const page = privateProfile;
  const result: ReportLog = {
    url: "https://www.linkedin.com/in/ivanahmadfatoni/",
    severity: ReportSeverity.PRIVATE_PROFILE,
    message: "Private profile",
  };

  // Act
  const test = checkPrivateProfile(report, page);

  // Assert
  expect(test).toEqual(result);
});

test("Returns the standard type of report (missing all fields) when is not a private LinkedIn page", () => {
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
  const test = checkPrivateProfile(report, page);

  // Assert
  expect(test).toEqual(result);
});
