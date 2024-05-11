// Node modules
import { expect, test } from "vitest";

// Project files
import "./contactedCandidates";
import Candidate from "types/Candidate";
import contactedCandidates from "./contactedCandidates";

test("Expects a correct filter of contacted candidates", () => {
  // note only candidates with id 1 and 3 have been contacted
  const value: Candidate[] = [
    {
      id: 1,
      projectId: 1,
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
      contact_status: 1,
      contact_date: "",
    },
    {
      id: 2,
      projectId: 1,
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
      projectId: 1,
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
      contact_status: 3,
      contact_date: "",
    },
  ];
  const result = [
    {
      id: 1,
      projectId: 1,
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
      contact_status: 1,
      contact_date: "",
    },
    {
      id: 3,
      projectId: 1,
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
      contact_status: 3,
      contact_date: "",
    },
  ];

  // Act
  const test = contactedCandidates(value);

  // Assert
  expect(test).toEqual(result);
});

test("No contacted candidates returns an empty array instead of an error", () => {
  // note all canddiates have contact_status = 0
  const value: Candidate[] = [
    {
      id: 1,
      projectId: 1,
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
      projectId: 1,
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
      projectId: 1,
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

  // Act
  const test = contactedCandidates(value);

  // Assert
  expect(test.length).toBe(0);
});
