// Node modules
import { expect, test } from "vitest";

// Project files
import editCandidate from "./editCandidate";
import Candidate from "types/Candidate";

test("Shows error if you try to edit the candidate id, only the server can edit it.", () => {
  // Arrange
  const payload = { id: 1, updates: { id: 5 } }; // YOU CANNOT CHANGE THE ID
  const state: Candidate[] = [
    {
      id: 1,
      assignment_id: 1,
      candidate_name: "Eduardo Alvarez Nowak",
      candidate_job_title: "Tech Lead",
      candidate_image_url:
        "https://media.licdn.com/dms/image/C4E03AQHwKgpnjrXkZA/profile-displayphoto-shrink_400_400/0/1643017689481?e=1718841600&v=beta&t=oXzvwBCY0QRE9ZnWl5CCqyBmDZFS2c_Jk9fDpndKzf8",
      company_name: "Novare Potential",
      company_duration_in_months: 34,
      company_image_url:
        "https://media.licdn.com/dms/image/C4E0BAQHElmOdWZ-xZA/company-logo_100_100/0/1631374829245/novare_potential_logo?e=1721260800&v=beta&t=ZRqH0M228v3G2tsbV5UsqqbmXstjR5_GQ69QLuw0eR8",
      notes:
        "Highly qualified, likes to help people and stays up to date with the latest frontend development tools.",
      relevance: 3,
      contact_status: 4,
      contact_date: "2024-04-02 21:00:30.610279",
      date_created: "2024-01-31 21:00:30.610279",
      linked_in_url: "https://www.linkedin.com/in/eduardo-alvarez-nowak/",
    },
    {
      id: 2,
      assignment_id: 1,
      candidate_name: "Sussana Vara",
      candidate_job_title: "Partner",
      candidate_image_url:
        "https://media.licdn.com/dms/image/D5603AQF_QPzYf-dJDg/profile-displayphoto-shrink_400_400/0/1697639168537?e=1719446400&v=beta&t=_BQWtHxKlLQYZQi1YSwkZLNaeEUsYvCtwz7Ck0Jr-NA",
      company_name: "Novare Potential",
      company_duration_in_months: 80,
      company_image_url:
        "https://media.licdn.com/dms/image/C4E0BAQHElmOdWZ-xZA/company-logo_100_100/0/1631374829245/novare_potential_logo?e=1721260800&v=beta&t=ZRqH0M228v3G2tsbV5UsqqbmXstjR5_GQ69QLuw0eR8",
      notes: "A servant type of leader.",
      relevance: 4,
      contact_status: 1,
      contact_date: "2024-04-02 21:00:30.610279",
      date_created: "2024-01-31 21:00:30.610279",
      linked_in_url: "https://www.linkedin.com/in/susanna-vaara-0b33b03a/",
    },
  ];
  const result = "You cannot modify the properties id or project_id of a candidate.";

  // Act
  const test = () => editCandidate(state, payload);

  // Assert
  expect(test).toThrowError(result);
});

test("Shows error if you try to edit the candidate project_id, only the server can edit it.", () => {
  // Arrange
  const payload = { id: 1, updates: { project_id: 42 } }; // YOU CANNOT CHANGE THE PROJECT ID
  const state: Candidate[] = [
    {
      id: 1,
      assignment_id: 1,
      candidate_name: "Eduardo Alvarez Nowak",
      candidate_job_title: "Tech Lead",
      candidate_image_url:
        "https://media.licdn.com/dms/image/C4E03AQHwKgpnjrXkZA/profile-displayphoto-shrink_400_400/0/1643017689481?e=1718841600&v=beta&t=oXzvwBCY0QRE9ZnWl5CCqyBmDZFS2c_Jk9fDpndKzf8",
      company_name: "Novare Potential",
      company_duration_in_months: 34,
      company_image_url:
        "https://media.licdn.com/dms/image/C4E0BAQHElmOdWZ-xZA/company-logo_100_100/0/1631374829245/novare_potential_logo?e=1721260800&v=beta&t=ZRqH0M228v3G2tsbV5UsqqbmXstjR5_GQ69QLuw0eR8",
      notes:
        "Highly qualified, likes to help people and stays up to date with the latest frontend development tools.",
      relevance: 3,
      contact_status: 4,
      contact_date: "2024-04-02 21:00:30.610279",
      date_created: "2024-01-31 21:00:30.610279",
      linked_in_url: "https://www.linkedin.com/in/eduardo-alvarez-nowak/",
    },
    {
      id: 2,
      assignment_id: 1,
      candidate_name: "Sussana Vara",
      candidate_job_title: "Partner",
      candidate_image_url:
        "https://media.licdn.com/dms/image/D5603AQF_QPzYf-dJDg/profile-displayphoto-shrink_400_400/0/1697639168537?e=1719446400&v=beta&t=_BQWtHxKlLQYZQi1YSwkZLNaeEUsYvCtwz7Ck0Jr-NA",
      company_name: "Novare Potential",
      company_duration_in_months: 80,
      company_image_url:
        "https://media.licdn.com/dms/image/C4E0BAQHElmOdWZ-xZA/company-logo_100_100/0/1631374829245/novare_potential_logo?e=1721260800&v=beta&t=ZRqH0M228v3G2tsbV5UsqqbmXstjR5_GQ69QLuw0eR8",
      notes: "A servant type of leader.",
      relevance: 4,
      contact_status: 1,
      contact_date: "2024-04-02 21:00:30.610279",
      date_created: "2024-01-31 21:00:30.610279",
      linked_in_url: "https://www.linkedin.com/in/susanna-vaara-0b33b03a/",
    },
  ];
  const result = "You cannot modify the properties id or project_id of a candidate.";

  // Act
  const test = () => editCandidate(state, payload);

  // Assert
  expect(test).toThrowError(result);
});

test("Correctly edits one modified field from a particular Candidate", () => {
  // Arrange
  const payload = { id: 2, updates: { candidate_name: "Sussana Vara" } }; // corrected name
  const state: Candidate[] = [
    {
      id: 1,
      candidate_name: "Eduardo Alvarez Nowak",
      candidate_job_title: "Tech Lead",
      candidate_image_url:
        "https://media.licdn.com/dms/image/C4E03AQHwKgpnjrXkZA/profile-displayphoto-shrink_400_400/0/1643017689481?e=1718841600&v=beta&t=oXzvwBCY0QRE9ZnWl5CCqyBmDZFS2c_Jk9fDpndKzf8",
      company_name: "Novare Potential",
      company_duration_in_months: 34,
      company_image_url:
        "https://media.licdn.com/dms/image/C4E0BAQHElmOdWZ-xZA/company-logo_100_100/0/1631374829245/novare_potential_logo?e=1721260800&v=beta&t=ZRqH0M228v3G2tsbV5UsqqbmXstjR5_GQ69QLuw0eR8",
      notes:
        "Highly qualified, likes to help people and stays up to date with the latest frontend development tools.",
      relevance: 3,
      contact_status: 4,
      contact_date: "2024-04-02 21:00:30.610279",
      assignment_id: 1,
      date_created: "2024-01-31 21:00:30.610279",
      linked_in_url: "https://www.linkedin.com/in/eduardo-alvarez-nowak/",
    },
    {
      id: 2,
      candidate_name: "Suana Bara", // Typo on purpose
      candidate_job_title: "Partner",
      candidate_image_url:
        "https://media.licdn.com/dms/image/D5603AQF_QPzYf-dJDg/profile-displayphoto-shrink_400_400/0/1697639168537?e=1719446400&v=beta&t=_BQWtHxKlLQYZQi1YSwkZLNaeEUsYvCtwz7Ck0Jr-NA",
      company_name: "Novare Potential",
      company_duration_in_months: 80,
      company_image_url:
        "https://media.licdn.com/dms/image/C4E0BAQHElmOdWZ-xZA/company-logo_100_100/0/1631374829245/novare_potential_logo?e=1721260800&v=beta&t=ZRqH0M228v3G2tsbV5UsqqbmXstjR5_GQ69QLuw0eR8",
      notes: "A servant type of leader.",
      relevance: 4,
      contact_status: 1,
      contact_date: "2024-04-02 21:00:30.610279",
      assignment_id: 1,
      date_created: "2024-01-31 21:00:30.610279",
      linked_in_url: "https://www.linkedin.com/in/susanna-vaara-0b33b03a/",
    },
  ];
  const result = [
    {
      id: 1,
      candidate_name: "Eduardo Alvarez Nowak",
      candidate_job_title: "Tech Lead",
      candidate_image_url:
        "https://media.licdn.com/dms/image/C4E03AQHwKgpnjrXkZA/profile-displayphoto-shrink_400_400/0/1643017689481?e=1718841600&v=beta&t=oXzvwBCY0QRE9ZnWl5CCqyBmDZFS2c_Jk9fDpndKzf8",
      company_name: "Novare Potential",
      company_duration_in_months: 34,
      company_image_url:
        "https://media.licdn.com/dms/image/C4E0BAQHElmOdWZ-xZA/company-logo_100_100/0/1631374829245/novare_potential_logo?e=1721260800&v=beta&t=ZRqH0M228v3G2tsbV5UsqqbmXstjR5_GQ69QLuw0eR8",
      notes:
        "Highly qualified, likes to help people and stays up to date with the latest frontend development tools.",
      relevance: 3,
      contact_status: 4,
      contact_date: "2024-04-02 21:00:30.610279",
      assignment_id: 1,
      date_created: "2024-01-31 21:00:30.610279",
      linked_in_url: "https://www.linkedin.com/in/eduardo-alvarez-nowak/",
    },
    {
      id: 2,
      candidate_name: "Sussana Vara", // corrected name inside new state
      candidate_job_title: "Partner",
      candidate_image_url:
        "https://media.licdn.com/dms/image/D5603AQF_QPzYf-dJDg/profile-displayphoto-shrink_400_400/0/1697639168537?e=1719446400&v=beta&t=_BQWtHxKlLQYZQi1YSwkZLNaeEUsYvCtwz7Ck0Jr-NA",
      company_name: "Novare Potential",
      company_duration_in_months: 80,
      company_image_url:
        "https://media.licdn.com/dms/image/C4E0BAQHElmOdWZ-xZA/company-logo_100_100/0/1631374829245/novare_potential_logo?e=1721260800&v=beta&t=ZRqH0M228v3G2tsbV5UsqqbmXstjR5_GQ69QLuw0eR8",
      notes: "A servant type of leader.",
      relevance: 4,
      contact_status: 1,
      contact_date: "2024-04-02 21:00:30.610279",
      assignment_id: 1,
      date_created: "2024-01-31 21:00:30.610279",
      linked_in_url: "https://www.linkedin.com/in/susanna-vaara-0b33b03a/",
    },
  ];

  // Act
  const test = editCandidate(state, payload);

  // Assert
  expect(test).toEqual(result);
});

test("Correctly edits multiple modified fields from a particular Candidate", () => {
  // Arrange
  const payload = {
    id: 2,
    updates: {
      candidate_name: "Sussana Vara",
      candidate_job_title: "Senior Manager",
    },
  }; // corrected name, and job
  const state: Candidate[] = [
    {
      id: 1,
      candidate_name: "Eduardo Alvarez Nowak",
      candidate_job_title: "Tech Lead",
      candidate_image_url:
        "https://media.licdn.com/dms/image/C4E03AQHwKgpnjrXkZA/profile-displayphoto-shrink_400_400/0/1643017689481?e=1718841600&v=beta&t=oXzvwBCY0QRE9ZnWl5CCqyBmDZFS2c_Jk9fDpndKzf8",
      company_name: "Novare Potential",
      company_duration_in_months: 34,
      company_image_url:
        "https://media.licdn.com/dms/image/C4E0BAQHElmOdWZ-xZA/company-logo_100_100/0/1631374829245/novare_potential_logo?e=1721260800&v=beta&t=ZRqH0M228v3G2tsbV5UsqqbmXstjR5_GQ69QLuw0eR8",
      notes:
        "Highly qualified, likes to help people and stays up to date with the latest frontend development tools.",
      relevance: 3,
      contact_status: 4,
      contact_date: "2024-04-02 21:00:30.610279",
      assignment_id: 1,
      date_created: "2024-01-31 21:00:30.610279",
      linked_in_url: "https://www.linkedin.com/in/eduardo-alvarez-nowak/",
    },
    {
      id: 2,
      candidate_name: "Suana Bara", // Typo on purpose
      candidate_job_title: "Junior Manager", // Junior rank on purpose
      candidate_image_url:
        "https://media.licdn.com/dms/image/D5603AQF_QPzYf-dJDg/profile-displayphoto-shrink_400_400/0/1697639168537?e=1719446400&v=beta&t=_BQWtHxKlLQYZQi1YSwkZLNaeEUsYvCtwz7Ck0Jr-NA",
      company_name: "Novare Potential",
      company_duration_in_months: 80,
      company_image_url:
        "https://media.licdn.com/dms/image/C4E0BAQHElmOdWZ-xZA/company-logo_100_100/0/1631374829245/novare_potential_logo?e=1721260800&v=beta&t=ZRqH0M228v3G2tsbV5UsqqbmXstjR5_GQ69QLuw0eR8",
      notes: "A servant type of leader.",
      relevance: 4,
      contact_status: 1,
      contact_date: "2024-04-02 21:00:30.610279",
      assignment_id: 1,
      date_created: "2024-01-31 21:00:30.610279",
      linked_in_url: "https://www.linkedin.com/in/susanna-vaara-0b33b03a/",
    },
  ];
  const result = [
    {
      id: 1,
      candidate_name: "Eduardo Alvarez Nowak",
      candidate_job_title: "Tech Lead",
      candidate_image_url:
        "https://media.licdn.com/dms/image/C4E03AQHwKgpnjrXkZA/profile-displayphoto-shrink_400_400/0/1643017689481?e=1718841600&v=beta&t=oXzvwBCY0QRE9ZnWl5CCqyBmDZFS2c_Jk9fDpndKzf8",
      company_name: "Novare Potential",
      company_duration_in_months: 34,
      company_image_url:
        "https://media.licdn.com/dms/image/C4E0BAQHElmOdWZ-xZA/company-logo_100_100/0/1631374829245/novare_potential_logo?e=1721260800&v=beta&t=ZRqH0M228v3G2tsbV5UsqqbmXstjR5_GQ69QLuw0eR8",
      notes:
        "Highly qualified, likes to help people and stays up to date with the latest frontend development tools.",
      relevance: 3,
      contact_status: 4,
      contact_date: "2024-04-02 21:00:30.610279",
      assignment_id: 1,
      date_created: "2024-01-31 21:00:30.610279",
      linked_in_url: "https://www.linkedin.com/in/eduardo-alvarez-nowak/",
    },
    {
      id: 2,
      candidate_name: "Sussana Vara", // corrected name inside new state
      candidate_job_title: "Senior Manager", // corrected job inside new state
      candidate_image_url:
        "https://media.licdn.com/dms/image/D5603AQF_QPzYf-dJDg/profile-displayphoto-shrink_400_400/0/1697639168537?e=1719446400&v=beta&t=_BQWtHxKlLQYZQi1YSwkZLNaeEUsYvCtwz7Ck0Jr-NA",
      company_name: "Novare Potential",
      company_duration_in_months: 80,
      company_image_url:
        "https://media.licdn.com/dms/image/C4E0BAQHElmOdWZ-xZA/company-logo_100_100/0/1631374829245/novare_potential_logo?e=1721260800&v=beta&t=ZRqH0M228v3G2tsbV5UsqqbmXstjR5_GQ69QLuw0eR8",
      notes: "A servant type of leader.",
      relevance: 4,
      contact_status: 1,
      contact_date: "2024-04-02 21:00:30.610279",
      assignment_id: 1,
      date_created: "2024-01-31 21:00:30.610279",
      linked_in_url: "https://www.linkedin.com/in/susanna-vaara-0b33b03a/",
    },
  ];

  // Act
  const test = editCandidate(state, payload);

  // Assert
  expect(test).toEqual(result);
});
