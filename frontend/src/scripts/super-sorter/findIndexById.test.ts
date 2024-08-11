// Node modules
import { expect, test } from "vitest";

// Project files
import findIndexById from "./findIndexById";
import Candidate from "types/Candidate";
import memorizeIndexes from "./memorizeIndexes";
import TableIndex from "types/TableIndex";

test("Can find the item index", () => {
  // Arrange
  const candidates: Candidate[] = [
    {
      id: 1,
      candidate_name: "Eduardo Alvarez Nowak",
      candidate_job_title: "Tech Lead",
      candidate_image_url: "",
      company_name: "Novare Potential",
      company_duration_in_months: 34,
      company_image_url: "",
      notes: `Highly qualified, likes to help people and stays up to date with the latest frontend development tools.`,
      relevance: 3,
      contact_status: 4,
      contact_date: "2024-04-02 21:00:30.610279",
      assignment_id: 1,
      date_created: "2024-01-31 21:00:30.610279",
      linked_in_url: "https://www.linkedin.com/in/eduardo-alvarez-nowak/",
    },
    {
      id: 22, // weird id's on purpose
      candidate_name: "Sussana Vara",
      candidate_job_title: "Partner",
      candidate_image_url: "",
      company_name: "Novare Potential",
      company_duration_in_months: 80,
      company_image_url: "",
      notes: "A servant type of leader.",
      relevance: 4,
      contact_status: 1,
      contact_date: "2024-04-02 21:00:30.610279",
      assignment_id: 1,
      date_created: "2024-01-31 21:00:30.610279",
      linked_in_url: "https://www.linkedin.com/in/susanna-vaara-0b33b03a/",
    },
    {
      id: 4444, // weird id's on purpose
      candidate_name: "Lana Haddad",
      candidate_job_title: "Senior Talent Acquisition Specialist",
      candidate_image_url: "",
      company_name: "Novare Potential",
      company_duration_in_months: 85,
      company_image_url: "",
      notes: `More than 8 years of HR recruitment experience in multiples industries like tech, restaurants, health sector, education, white collar, blue collar, executive search, and more. Great salary negotiation skills.`,
      relevance: 5,
      contact_status: 0,
      contact_date: "2024-04-02 21:00:30.610279",
      assignment_id: 1,
      date_created: "2024-01-31 21:00:30.610279",
      linked_in_url: "https://www.linkedin.com/in/lanahaddad87/",
    },
  ];
  const tableIndexes = memorizeIndexes(candidates);
  const candidate = candidates[2]; // Lana Haddad
  const result = 3; // She is the number 3 on the array

  // Act
  const test = findIndexById(tableIndexes, candidate);

  // Assert
  expect(test).toBe(result);
});

test("Returns the candidate id in case it cannot find the table index", () => {
  // Arrange
  const candidates: Candidate[] = [
    {
      id: 1,
      candidate_name: "Eduardo Alvarez Nowak",
      candidate_job_title: "Tech Lead",
      candidate_image_url: "",
      company_name: "Novare Potential",
      company_duration_in_months: 34,
      company_image_url: "",
      notes: `Highly qualified, likes to help people and stays up to date with the latest frontend development tools.`,
      relevance: 3,
      contact_status: 4,
      contact_date: "2024-04-02 21:00:30.610279",
      assignment_id: 1,
      date_created: "2024-01-31 21:00:30.610279",
      linked_in_url: "https://www.linkedin.com/in/eduardo-alvarez-nowak/",
    },
    {
      id: 22, // weird id's on purpose
      candidate_name: "Sussana Vara",
      candidate_job_title: "Partner",
      candidate_image_url: "",
      company_name: "Novare Potential",
      company_duration_in_months: 80,
      company_image_url: "",
      notes: "A servant type of leader.",
      relevance: 4,
      contact_status: 1,
      contact_date: "2024-04-02 21:00:30.610279",
      assignment_id: 1,
      date_created: "2024-01-31 21:00:30.610279",
      linked_in_url: "https://www.linkedin.com/in/susanna-vaara-0b33b03a/",
    },
    {
      id: 4444, // weird id's on purpose
      candidate_name: "Lana Haddad",
      candidate_job_title: "Senior Talent Acquisition Specialist",
      candidate_image_url: "",
      company_name: "Novare Potential",
      company_duration_in_months: 85,
      company_image_url: "",
      notes: `More than 8 years of HR recruitment experience in multiples industries like tech, restaurants, health sector, education, white collar, blue collar, executive search, and more. Great salary negotiation skills.`,
      relevance: 5,
      contact_status: 0,
      contact_date: "2024-04-02 21:00:30.610279",
      assignment_id: 1,
      date_created: "2024-01-31 21:00:30.610279",
      linked_in_url: "https://www.linkedin.com/in/lanahaddad87/",
    },
  ];
  const badTableIndex: TableIndex[] = [
    {
      candidate_id: 1,
      table_index: 1,
    },
    {
      candidate_id: 1234, // incorrect id of candidate Sussana as it should be 22
      table_index: 2,
    },
    {
      candidate_id: 4444,
      table_index: 3,
    },
  ];
  const candidate = candidates[1]; // Sussana Vaara
  const result = 22; // She is the number 2 on the array but because we can find table index, we return her candidate.id

  // Act
  const test = findIndexById(badTableIndex, candidate);

  // Assert
  expect(test).toBe(result);
});
