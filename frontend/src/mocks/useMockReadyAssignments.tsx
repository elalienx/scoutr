// Project files
import ResultsAPI from "types/ResultsAPI";

export default function useMockLoading(uri: string): ResultsAPI {
  return {
    data: [
      {
        id: 1,
        date_created: "2024-12-31",
        assignment_name: "Data Engineer",
        company_name: "Folksam",
        company_image_url: "folksam.png",
      },
      {
        id: 2,
        date_created: "2024-12-31",
        assignment_name: "Master Data Specialist",
        company_name: "McDonalds",
        company_image_url: "mcdonalds.png",
      },
    ],
    status: "loading",
    message: uri,
  };
}
