// Node modules
import { expect, test } from "vitest";

// Project files
import pageToProfile from "./pageToProfile";
import { profile1 } from "./test-data/profile1";
import LinkedInProfile from "../types/LinkedInProfile";

test("Susscesfully scans first profile", () => {
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
  const test = pageToProfile(profile1);

  // Assert
  expect(test).toEqual(result);
});
