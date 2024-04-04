// Node modules
import { expect, test } from "vitest";

// Project files
import Report from "../../types/Report";
import LinkedInProfile from "../../types/LinkedInProfile";
import reportEmptyFields from "./reportEmptyFields";

test("Create an error severity #0 (no errors) when everything is complete", () => {
  // Arrange
  const url = "linked.com/eduardo-alvarez-nowak";
  const profile: LinkedInProfile = {
    candidate_name: "Eduardo Alvarez Nowak",
    candidate_job_title: "Developer",
    candidate_image_url: "http://sample-image.com/user.jpg",
    company_name: "Some company",
    company_duration_in_months: 42,
    company_image_url: "http://sample-image.com/company.jpg",
  };
  const result: Report = {
    linked_in_url: "linked.com/eduardo-alvarez-nowak",
    severity: 0,
    message: "No problems found",
  };

  // Act
  const test = reportEmptyFields(url, profile);

  // Assert
  expect(test).toEqual(result);
});

test("Create an error severity #1 report one field is missing", () => {
  // Arrange
  const url = "linked.com/eduardo-alvarez-nowak";
  const profile: LinkedInProfile = {
    candidate_name: "Eduardo Alvarez Nowak",
    candidate_job_title: "", // missing on purpose
    candidate_image_url: "http://sample-image.com/user.jpg",
    company_name: "Some company",
    company_duration_in_months: 42,
    company_image_url: "http://sample-image.com/company.jpg",
  };
  const result: Report = {
    linked_in_url: "linked.com/eduardo-alvarez-nowak",
    severity: 1,
    message: "Missing candidate_job_title",
  };

  // Act
  const test = reportEmptyFields(url, profile);

  // Assert
  expect(test).toEqual(result);
});

test("Create an error severity #1 report more than one field are missing", () => {
  // Arrange
  const url = "linked.com/eduardo-alvarez-nowak";
  const profile: LinkedInProfile = {
    candidate_name: "Eduardo Alvarez Nowak",
    candidate_job_title: "", // missing on purpose
    candidate_image_url: "", // missing on purpose
    company_name: "Some company",
    company_duration_in_months: 42,
    company_image_url: "http://sample-image.com/company.jpg",
  };
  const result: Report = {
    linked_in_url: "linked.com/eduardo-alvarez-nowak",
    severity: 1,
    message: "Missing candidate_job_title, candidate_image_url",
  };

  // Act
  const test = reportEmptyFields(url, profile);

  // Assert
  expect(test).toEqual(result);
});

test("Create an error severity #2 report when all fields are missing", () => {
  // Arrange
  const url = "linked.com/eduardo-alvarez-nowak";
  const profile: LinkedInProfile = {
    candidate_name: "",
    candidate_job_title: "",
    candidate_image_url: "",
    company_name: "",
    company_duration_in_months: 0,
    company_image_url: "",
  };
  const result: Report = {
    linked_in_url: "linked.com/eduardo-alvarez-nowak",
    severity: 2,
    message: "Missing all fields",
  };

  // Act
  const test = reportEmptyFields(url, profile);

  // Assert
  expect(test).toEqual(result);
});
