// Node modules
import { expect, test } from "vitest";

// Project files
import generateReport from "./generateReport";
import LinkedInProfile from "../../types/LinkedInProfile";
import ReportLog from "../../types/ReportLog";
import ReportSeverity from "../../types/ReportSeverity";
import { bannedPage } from "./test-data/bannedPage";
import { privateProfile } from "./test-data/profilePrivate";
import { example } from "../extract/test-data/example";

// Returns ban report when passing a banned page
test("Returns ban report when passing a banned page", () => {
  // Arrange
  const url = "www.example.com";
  const page = bannedPage;
  const profile: LinkedInProfile = {
    candidate_name: "",
    candidate_job_title: "",
    candidate_image_url: "",
    company_name: "",
    company_duration_in_months: 0,
    company_image_url: "",
  };
  const result: ReportLog = {
    url: "www.example.com",
    severity: ReportSeverity.TEMPORAL_BAN,
    message: "Temporally suspended",
  };

  // Act
  const test = generateReport(url, page, profile);

  // Assert
  expect(test).toEqual(result);
});

test("Returns private report when passing a private profile", () => {
  // Arrange
  const url = "www.example.com";
  const page = privateProfile;
  const profile: LinkedInProfile = {
    candidate_name: "",
    candidate_job_title: "",
    candidate_image_url: "",
    company_name: "",
    company_duration_in_months: 0,
    company_image_url: "",
  };
  const result: ReportLog = {
    url: "www.example.com",
    severity: ReportSeverity.PRIVATE_PROFILE,
    message: "Private profile",
  };

  // Act
  const test = generateReport(url, page, profile);

  // Assert
  expect(test).toEqual(result);
});

test("Returns unknown error: Missing all fields when passing other type of page.", () => {
  // Arrange
  const url = "www.example.com";
  const page = example;
  const profile: LinkedInProfile = {
    candidate_name: "",
    candidate_job_title: "",
    candidate_image_url: "",
    company_name: "",
    company_duration_in_months: 0,
    company_image_url: "",
  };
  const result: ReportLog = {
    url: "www.example.com",
    severity: ReportSeverity.MISSING_ALL_FIELDS,
    message: "Missing all fields",
  };

  // Act
  const test = generateReport(url, page, profile);

  // Assert
  expect(test).toEqual(result);
});
