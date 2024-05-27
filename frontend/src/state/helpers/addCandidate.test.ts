// Node modules
import { describe, expect, test } from "vitest";

// Project files
import addCandidate from "./addCandidate";
import Candidate from "types/Candidate";

describe("Shows error is you try to add a candidate without important keys", () => {
  test("Candidate without id", () => {
    // Arrange
    const state: Candidate[] = [];
    // @ts-expect-error
    const payload: Candidate = {
      assignment_id: 2,
      date_created: "",
      linked_in_url: "https://www.linkedin.com/in/eduardo-alvarez-nowak/",
      candidate_name: "Eduardo Alvarez",
      candidate_job_title: "",
      candidate_image_url: "",
      company_name: "",
      company_duration_in_months: 0,
      company_image_url: "",
      notes: "",
      relevance: 0,
      contact_status: 0,
      contact_date: "",
    };
    const result = "Candidate is missing the key id, project_id, linked_in_url and/or name.";

    // Act
    const test = () => addCandidate(state, payload);

    // Assert
    expect(test).toThrowError(result);
  });

  test("Candidate without assignment_id", () => {
    // Arrange
    const state: Candidate[] = [];
    // @ts-expect-error
    const payload: Candidate = {
      id: 1,
      date_created: "",
      linked_in_url: "https://www.linkedin.com/in/eduardo-alvarez-nowak/",
      candidate_name: "Eduardo Alvarez",
      candidate_job_title: "",
      candidate_image_url: "",
      company_name: "",
      company_duration_in_months: 0,
      company_image_url: "",
      notes: "",
      relevance: 0,
      contact_status: 0,
      contact_date: "",
    };
    const result = "Candidate is missing the key id, project_id, linked_in_url and/or name.";

    // Act
    const test = () => addCandidate(state, payload);

    // Assert
    expect(test).toThrowError(result);
  });

  test("Candidate without linked_in_url", () => {
    // Arrange
    const state: Candidate[] = [];
    // @ts-expect-error
    const payload: Candidate = {
      id: 1,
      assignment_id: 2,
      date_created: "",
      candidate_name: "Eduardo Alvarez",
      candidate_job_title: "",
      candidate_image_url: "",
      company_name: "",
      company_duration_in_months: 0,
      company_image_url: "",
      notes: "",
      relevance: 0,
      contact_status: 0,
      contact_date: "",
    };
    const result = "Candidate is missing the key id, project_id, linked_in_url and/or name.";

    // Act
    const test = () => addCandidate(state, payload);

    // Assert
    expect(test).toThrowError(result);
  });

  test("Candidate without name", () => {
    // Arrange
    const state: Candidate[] = [];
    // @ts-expect-error
    const payload: Candidate = {
      id: 1,
      assignment_id: 2,
      date_created: "",
      linked_in_url: "https://www.linkedin.com/in/eduardo-alvarez-nowak/",
      candidate_job_title: "",
      candidate_image_url: "",
      company_name: "",
      company_duration_in_months: 0,
      company_image_url: "",
      notes: "",
      relevance: 0,
      contact_status: 0,
      contact_date: "",
    };
    const result = "Candidate is missing the key id, project_id, linked_in_url and/or name.";

    // Act
    const test = () => addCandidate(state, payload);

    // Assert
    expect(test).toThrowError(result);
  });
});

describe("Shows error if you try to add a candidate with empty important values", () => {
  test("Candidate with empty LinkedIn link", () => {
    // Arrange
    const state: Candidate[] = [];
    const payload: Candidate = {
      id: 1,
      assignment_id: 2,
      date_created: "",
      linked_in_url: "",
      candidate_name: "Eduardo Alvarez",
      candidate_job_title: "",
      candidate_image_url: "",
      company_name: "",
      company_duration_in_months: 0,
      company_image_url: "",
      notes: "",
      relevance: 0,
      contact_status: 0,
      contact_date: "",
    };
    const result = "Canddiate is missing the value for candidate_name or linked_in_url.";

    // Act
    const test = () => addCandidate(state, payload);

    // Assert
    expect(test).toThrowError(result);
  });

  test("Candidate with empty name", () => {
    // Arrange
    const state: Candidate[] = [];
    const payload: Candidate = {
      id: 1,
      assignment_id: 2,
      date_created: "",
      linked_in_url: "https://www.linkedin.com/in/eduardo-alvarez-nowak/",
      candidate_name: "",
      candidate_job_title: "",
      candidate_image_url: "",
      company_name: "",
      company_duration_in_months: 0,
      company_image_url: "",
      notes: "",
      relevance: 0,
      contact_status: 0,
      contact_date: "",
    };
    const result = "Canddiate is missing the value for candidate_name or linked_in_url.";

    // Act
    const test = () => addCandidate(state, payload);

    // Assert
    expect(test).toThrowError(result);
  });
});

test("Correcty add a candidate", () => {
  // Arrange
  const state: Candidate[] = [];
  const payload: Candidate = {
    id: 1,
    assignment_id: 2,
    date_created: "",
    linked_in_url: "https://www.linkedin.com/in/eduardo-alvarez-nowak/",
    candidate_name: "Eduardo Alvarez",
    candidate_job_title: "",
    candidate_image_url: "",
    company_name: "",
    company_duration_in_months: 0,
    company_image_url: "",
    notes: "",
    relevance: 0,
    contact_status: 0,
    contact_date: "",
  };
  const result: Candidate[] = [
    {
      id: 1,
      assignment_id: 2,
      date_created: "",
      linked_in_url: "https://www.linkedin.com/in/eduardo-alvarez-nowak/",
      candidate_name: "Eduardo Alvarez",
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
  const test = addCandidate(state, payload);

  // Assert
  expect(test).toEqual(result);
});
