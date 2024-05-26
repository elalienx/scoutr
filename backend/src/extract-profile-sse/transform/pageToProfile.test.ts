// Node modules
import { expect, test } from "vitest";

// Project files
import pageToProfile from "./pageToProfile";
import { profile1 } from "./test-data/profile1";
import { profile2 } from "./test-data/profile2";
import { profile3 } from "./test-data/profile3";
import type LinkedInProfile from "../../types/LinkedInProfile";

test("Returns all fields on a complete profile", () => {
  // Arrange
  const page = profile1;
  const result: LinkedInProfile = {
    candidate_name: "Eduardo Alvarez Nowak",
    candidate_job_title: "Tech Education Lead",
    candidate_image_url:
      "https://media.licdn.com/dms/image/C4E03AQHwKgpnjrXkZA/profile-displayphoto-shrink_200_200/0/1643017689481?e=2147483647&v=beta&t=jU2cTtlQ-Zu8KItC4RnwO_vYqbilIVQf7vZtr4ZPXvI",
    company_name: "Novare Potential",
    company_duration_in_months: 33,
    company_image_url:
      "https://media.licdn.com/dms/image/C4E0BAQHElmOdWZ-xZA/company-logo_100_100/0/1631374829245/novare_potential_logo?e=2147483647&v=beta&t=H7g2UQzQ3iMOBYAa6mi8HYza3caRFI57VBdQXR24F_M",
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
    candidate_job_title: "SAFe certified Scrum Master",
    candidate_image_url: "",
    company_name: "Swedbank",
    company_duration_in_months: 29,
    company_image_url:
      "https://media.licdn.com/dms/image/C4E0BAQGIwfzke6i5bQ/company-logo_100_100/0/1630648928740/swedbank_logo?e=2147483647&v=beta&t=Mf_BdfzucqekpSITo4gsiGKB1T8ikbHdpFcly_pLX74",
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
    candidate_job_title: "",
    candidate_image_url:
      "https://media.licdn.com/dms/image/C5603AQFgT-mGmmzhnw/profile-displayphoto-shrink_200_200/0/1516239621248?e=2147483647&v=beta&t=Ha37tdu9KCdFflq06Whf6hzVjySD9GnXjE0tbk1bs1A",
    company_name: "Recruitjob.se",
    company_duration_in_months: 26,
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
