// Node modules
import { expect, test } from "vitest";

// Project files
import fetchAssignment from "./fetchAssignment";
import Assignment from "types/Assignment";
import packageData from "scripts/packageData";

test("Show error is API is not correct", async () => {
  // Arrange
  const uri = "api/assigments/"; // missing the "n" between "g" and "m" on purpose
  const data = {
    assignment_name: "Graphic Designer",
    company_name: "Spotify",
  };
  const options = packageData("POST", data);
  // prettier-ignore
  const result = "The URI appears invalid. Check for typos or update the test for any endpoint changes."

  // Act
  const test = fetchAssignment(uri, options);

  // Assert
  expect(test).rejects.toThrowError(result);
});

test.todo("Show error if options are not valid", () => {
  // Arrange
  const uri = "/api/assignments";
  const data = {
    assignment_name: "Graphic Designer",
    company: "Spotify", // company should be company_name
  };
  const options = packageData("POST", data);
  // prettier-ignore
  const result = "The data send to the server appears invalid. Check for typos or update the test for any endpoint changes."

  // Act
  const test = fetchAssignment(uri, options);

  // Assert
  expect(test).rejects.toThrowError(result);
});

test("Verifies that recives the correct URI from the form", () => {
  // Arrange
  const uri = "api/assignments/";
  const data = {
    assignment_name: "Graphic Designer",
    company_name: "Spotify",
  };
  const options = packageData("POST", data);
  const result: Assignment = {
    id: 1,
    date_created: "2024-12-31",
    assignment_name: "Graphic Designer",
    company_name: "Spotify",
    company_image_url: "",
  };

  // Act
  const test = Promise.resolve(fetchAssignment(uri, options));

  // Assert
  expect(test.data).toEqual(result);
});

test.todo("Verifies that receives the correct data from the form", () => {});
