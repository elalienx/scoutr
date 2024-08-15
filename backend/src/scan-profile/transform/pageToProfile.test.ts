// Node modules
import { expect, test } from "vitest";

// Project files
import type LinkedInProfile from "types/LinkedInProfile";
import { profile1 } from "./test-websites/profile1";
import { profile2 } from "./test-websites/profile2";
import { profile3 } from "./test-websites/profile3";
import pageToProfile from "./pageToProfile";

test("Returns all fields on a complete profile", () => {
  // Arrange
  const page = profile1;
  const result: LinkedInProfile = {
    candidate_name: "Eduardo Alvarez Nowak",
    candidate_job_title: "Tech Education Team Lead",
    candidate_image_url: `https://media.licdn.com/dms/image/C4E03AQHwKgpnjrXkZA/profile-displayphoto-shrink_400_400/0/1643017689481?e=1726099200&v=beta&t=Wew9-WaLMM3g5lKNGqyL2GSJXPG_4MZVm4yh4Uc7_yg`,
    company_name: "Novare Potential",
    company_duration_in_months: 37,
    company_image_url: `https://media.licdn.com/dms/image/C4E0BAQHElmOdWZ-xZA/company-logo_100_100/0/1631374829245/novare_potential_logo?e=1729123200&v=beta&t=y6yR_P-BRhHLvFeDonDDcd0CWIvtaCC6Yc00Aj3k5j0`,
  };

  // Act
  const test = pageToProfile(page);

  // Assert
  expect(test).toEqual(result);
});

test("Returns an empty string for candidate image if profile has private picture", () => {
  // Arrange
  const page = profile2;
  const result = {
    candidate_name: "Sri Lalitha Jeevanige",
    candidate_job_title: "Scrum Master - Software Engineer",
    candidate_image_url: "",
    company_name: "Swedbank",
    company_duration_in_months: 63,
    company_image_url: `https://media.licdn.com/dms/image/C4E0BAQGIwfzke6i5bQ/company-logo_100_100/0/1630648928740/swedbank_logo?e=1729123200&v=beta&t=8DGj5MZgzOMdbCoSnbhXsqd0T8929_FllplB-SuIhfk`,
  };

  // Act
  const test = pageToProfile(page);

  // Assert
  expect(test).toEqual(result);
});

test("Returns an empty string for company image if candidate has a job in a company without a logo", () => {
  // Arrange
  const page = profile3;
  const result: LinkedInProfile = {
    candidate_name: "Abgar Gulo",
    candidate_job_title: "Co-Founder",
    candidate_image_url: `https://media.licdn.com/dms/image/C5603AQFgT-mGmmzhnw/profile-displayphoto-shrink_400_400/0/1516239621324?e=1726099200&v=beta&t=9le5khM9sFIXNqhuEFIYCm_VHVri0d74VYiOqOAzSpQ`,
    company_name: "Recruitjob.se",
    company_duration_in_months: 30,
    company_image_url: "",
  };

  // Act
  const test = pageToProfile(page);

  // Assert
  expect(test).toEqual(result);
});

test("Returns empty strings for missing fields", () => {
  // Arrange
  const page = "<html><body><p>Empty Profile</p></body></html>";
  const result: LinkedInProfile = {
    candidate_name: "",
    candidate_job_title: "",
    candidate_image_url: "",
    company_name: "",
    company_duration_in_months: 0,
    company_image_url: "",
  };

  // Act
  const test = pageToProfile(page);

  // Assert
  expect(test).toEqual(result);
});
