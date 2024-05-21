// Node modules
import { expect, test } from "vitest";

// Project files
import mockFetchEditCandidate from "./mockFetchEditCandidate";
import packageData from "scripts/forms/packageData";

test("Show error if URI is not correct", () => {
  // Arrange
  const uri = "/api/candidates/"; // missing the candidate id. It should be /api/candidates/1 with "1" after "candidates/"
  const formData = {
    candidate_name: "Eduardo Alvarez",
    candidate_job_title: "Graphic Designer",
  };
  const options = packageData("POST", formData);
  const result = `URI "/api/candidates/" is invalid. Check for typos or update the test if the endpoint changed.`;

  // Act
  const test = mockFetchEditCandidate(uri, options);

  // Assert
  expect(test).rejects.toThrowError(result);
});

test("Show error if form data is not valid", () => {
  // Arrange
  const uri = "/api/candidates/1";
  const formData = {
    candidate_name: "Eduardo Alvarez",
    candidate_job: "Graphic Designer", // should be candidate_job_title
  };
  const options = packageData("PATCH", formData);
  const result =
    "Data send to the server is invalid. Check for typos or update the test if the endpoint changed.";

  // Act
  const test = mockFetchEditCandidate(uri, options);

  // Assert
  expect(test).rejects.toThrowError(result);
});

test("Returns a valid assignment with ID if everything is correct", async () => {
  // Arrange
  const uri = "/api/candidates/1";
  const data = {
    candidate_name: "Eduardo Alvarez",
    candidate_job_title: "Graphic Designer",
  };
  const options = packageData("PATCH", data);
  const result = {
    candidate_name: "Eduardo Alvarez",
    candidate_job_title: "Graphic Designer",
  };

  // Act
  const test = await mockFetchEditCandidate(uri, options);

  // Assert
  expect(test.data).toEqual(result);
});
