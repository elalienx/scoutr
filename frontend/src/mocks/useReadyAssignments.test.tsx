// Node modules
import { expect, test } from "vitest";

// Project files
import useReadyAssignments from "./useReadyAssignments";
import Status from "types/Status";
import Assignment from "types/Assignment";

test("Expect return content if passed a valid url", () => {
  // Arrange
  const uri = "api/example/";
  const resultStatus: Status = "ready";
  const resultData: Assignment[] = [
    {
      id: 1,
      date_created: "2024-12-31",
      assignment_name: "Data Engineer",
      company_name: "Folksam",
      company_image_url: "",
    },
    {
      id: 2,
      date_created: "2024-12-31",
      assignment_name: "Master Data Specialist",
      company_name: "McDonalds",
      company_image_url: "",
    },
  ];

  // Act
  const test = useReadyAssignments(uri);

  // Assert
  expect(test.status).toEqual(resultStatus);
  expect(test.data).toEqual(resultData);
});
