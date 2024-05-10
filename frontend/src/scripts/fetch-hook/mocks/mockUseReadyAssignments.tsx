// Project files
import ResultsAPI from "types/ResultAPI";

export default function mockUseReadyAssignments(uri: string): ResultsAPI {
  return {
    data: [
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
    ],
    status: "ready",
    message: `Success fetching ${uri}`,
  };
}
