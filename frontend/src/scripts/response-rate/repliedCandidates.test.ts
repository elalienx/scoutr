// Node modules
import { expect, test } from "vitest";

// Project files
import Candidate from "types/Candidate";
import repliedCandidates from "./repliedCandidates";

test("Expects a correct filter of contacted candidates", () => {
  // note only candidates with id 1 and 3 have been contacted
  const value: Candidate[] = [
    {
      id: 1,
      assignment_id: 1,
      date_created: "",
      linked_in_url: "",
      candidate_name: "Eduardo",
      candidate_job_title: "",
      candidate_image_url: "",
      company_name: "",
      company_duration_in_months: 0,
      company_image_url: "",
      notes: "",
      relevance: 0,
      contact_status: 1, // contacted, replied, intervieed and got hired!
      contact_date: "",
    },
    {
      id: 2,
      assignment_id: 1,
      date_created: "",
      linked_in_url: "",
      candidate_name: "Sussana",
      candidate_job_title: "",
      candidate_image_url: "",
      company_name: "",
      company_duration_in_months: 0,
      company_image_url: "",
      notes: "",
      relevance: 0,
      contact_status: 0,
      contact_date: "",
    },
    {
      id: 3,
      assignment_id: 1,
      date_created: "",
      linked_in_url: "",
      candidate_name: "Lana",
      candidate_job_title: "",
      candidate_image_url: "",
      company_name: "",
      company_duration_in_months: 0,
      company_image_url: "",
      notes: "",
      relevance: 0,
      contact_status: 5, // contacted but not reply yet so it does not count!!!
      contact_date: "",
    },
  ];
  const result = 1;

  // Act
  const test = repliedCandidates(value);

  // Assert
  expect(test).toBe(result);
});

test("No contacted candidates returns an empty array instead of an error", () => {
  // note all canddiates have contact_status = 0
  const value: Candidate[] = [
    {
      id: 1,
      assignment_id: 1,
      date_created: "",
      linked_in_url: "",
      candidate_name: "Eduardo",
      candidate_job_title: "",
      candidate_image_url: "",
      company_name: "",
      company_duration_in_months: 0,
      company_image_url: "",
      notes: "",
      relevance: 0,
      contact_status: 0,
      contact_date: "",
    },
    {
      id: 2,
      assignment_id: 1,
      date_created: "",
      linked_in_url: "",
      candidate_name: "Sussana",
      candidate_job_title: "",
      candidate_image_url: "",
      company_name: "",
      company_duration_in_months: 0,
      company_image_url: "",
      notes: "",
      relevance: 0,
      contact_status: 0,
      contact_date: "",
    },
    {
      id: 3,
      assignment_id: 1,
      date_created: "",
      linked_in_url: "",
      candidate_name: "Lana",
      candidate_job_title: "",
      candidate_image_url: "",
      company_name: "",
      company_duration_in_months: 0,
      company_image_url: "",
      notes: "",
      relevance: 0,
      contact_status: 0,
      contact_date: "",
    },
  ];
  const result = 0;

  // Act
  const test = repliedCandidates(value);

  // Assert
  expect(test).toBe(result);
});
