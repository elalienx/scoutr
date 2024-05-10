// Node modules
import { expect, test } from "vitest";

// Project files
import fetchAssignmentSlow from "./fetchAssignmentSlow";
import Assignment from "types/Assignment";
import packageData from "scripts/forms/packageData";

test("Simulates returning a valid assignment after 10 seconds due to a slow connection", async () => {
  // Arrange
  const uri = "/api/assignments";
  const data = {
    assignment_name: "Graphic Designer",
    company_name: "Spotify",
  };
  const options = packageData("POST", data);
  const result: Assignment = {
    id: 9999,
    date_created: "2024-12-31",
    assignment_name: "Graphic Designer",
    company_name: "Spotify",
    company_image_url: "",
  };

  // Act
  const test = await fetchAssignmentSlow(uri, options);

  // Assert
  expect(test.data).toEqual(result);
});
