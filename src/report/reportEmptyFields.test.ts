// Node modules
import { expect, test } from "vitest";
import reportEmptyFields from "./reportEmptyFields";
import LinkedInProfile from "../types/LinkedInProfile";

// Project files

test.todo("Create a full report mentioning every single field", () => {
  // Arrange
  const profile: LinkedInProfile = {
    candidate_name: "",
    candidate_job_title: "",
    candidate_image_url: "",
    company_name: "",
    company_duration_in_months: 0,
    company_image_url: "",
  };
  const result = "";

  // Act
  const test = reportEmptyFields(profile);

  // Assert
  expect(test).toBe(result);
});
