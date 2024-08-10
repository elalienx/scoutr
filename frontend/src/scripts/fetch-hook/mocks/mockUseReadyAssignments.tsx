// Project files
import ResultsAPI from "types/ResultAPI";
import SampleImages from "./sample-images.json";

export default function mockUseReadyAssignments(uri: string): ResultsAPI {
  return {
    data: [
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
        company_name: "",
        company_image_url: SampleImages.company_mcdonalds,
      },
    ],
    status: "ready",
    message: `Success fetching ${uri}`,
  };
}
