// Node modules
import { expect, test } from "vitest";

// Project files
import type StatusPage from "types/StatusPage";
import type Assignment from "types/Assignment";
import mockUseReadyAssignments from "./mockUseReadyAssignments";
import SampleImages from "./sample-images.json";

test("Expect return content if passed a valid url", () => {
  // Arrange
  const uri = "api/example/";
  const resultStatus: StatusPage = "ready";
  const resultData: Assignment[] = [
    {
      id: 1,
      date_created: "2024-12-31",
      assignment_name: "Data Engineer",
      company_name: "Folksam",
      company_image_url: SampleImages.company_foklsam,
    },
    {
      id: 2,
      date_created: "2024-12-31",
      assignment_name: "Master Data Specialist",
      company_name: "McDonalds",
      company_image_url: SampleImages.company_mcdonalds,
    },
  ];

  // Act
  const test = mockUseReadyAssignments(uri);

  // Assert
  expect(test.status).toEqual(resultStatus);
  expect(test.data).toEqual(resultData);
});
