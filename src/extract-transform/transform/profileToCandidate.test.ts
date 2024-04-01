// Node modules
import { expect, test } from "vitest";

// Project files
import profileToCandidate from "./profileToCandidate";
import LinkedInProfile from "../../types/LinkedInProfile";
import CandidateRow from "../../types/CandidateRow";

// prettier-ignore
test("Expects a valid array from the candidare related objects", () => {
  // Arrange
  const profile: LinkedInProfile = {
    candidate_name: "Eduardo Alvarez Nowak",
    candidate_job_title: "Tech Education Lead",
    candidate_image_url: "https://media.licdn.com/dms/image/C4E03AQHwKgpnjrXkZA/profile-displayphoto-shrink_200_200/0/1643017689481?e=2147483647&v=beta&t=jU2cTtlQ-Zu8KItC4RnwO_vYqbilIVQf7vZtr4ZPXvI",
    company_name: "Novare Potential",
    company_duration_in_months: 33,
    company_image_url: "https://media.licdn.com/dms/image/C4E0BAQHElmOdWZ-xZA/company-logo_100_100/0/1631374829245/novare_potential_logo?e=2147483647&v=beta&t=H7g2UQzQ3iMOBYAa6mi8HYza3caRFI57VBdQXR24F_M",
  };
  const url = "https://www.linkedin.com/in/eduardo-alvarez-nowak/";
  const assignment_id = 1;
  const result: CandidateRow = [1, "https://www.linkedin.com/in/eduardo-alvarez-nowak/", "Eduardo Alvarez Nowak", "Tech Education Lead", "https://media.licdn.com/dms/image/C4E03AQHwKgpnjrXkZA/profile-displayphoto-shrink_200_200/0/1643017689481?e=2147483647&v=beta&t=jU2cTtlQ-Zu8KItC4RnwO_vYqbilIVQf7vZtr4ZPXvI", "Novare Potential", 33, "https://media.licdn.com/dms/image/C4E0BAQHElmOdWZ-xZA/company-logo_100_100/0/1631374829245/novare_potential_logo?e=2147483647&v=beta&t=H7g2UQzQ3iMOBYAa6mi8HYza3caRFI57VBdQXR24F_M"];

  // Act
  const test = profileToCandidate(profile, {url, assignment_id})

  // Assert
  expect(test).toEqual(result)
});

test("Does not crash if you pass missing fields", () => {
  // Arrange
  const profile: LinkedInProfile = {
    candidate_name: "",
    candidate_job_title: "",
    candidate_image_url: "",
    company_name: "",
    company_duration_in_months: 0,
    company_image_url: "",
  };
  const url = "linkedin.com/this-profile-does-not-exist/";
  const assignment_id = 1;
  const result: CandidateRow = [1, "linkedin.com/this-profile-does-not-exist/", "", "", "", "", 0, ""];

  // Act
  const test = profileToCandidate(profile, { url, assignment_id });

  // Assert
  expect(test).toEqual(result);
});
