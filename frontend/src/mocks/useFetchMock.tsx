import ResultsAPI from "types/ResultsAPI";

export default function useFetchMock(url: string, initialState: unknown = []) {
  console.log("useFetchMock() 🎭");

  let result: ResultsAPI = {
    data: [],
    status: "loading",
    message: "",
  };

  switch (url) {
    case "www.loading.com":
      result = { data: [], status: "loading", message: "" };
      break;
    case "www.error.com":
      result = { data: [], status: "error", message: "" };
      break;
    case "www.empty.com":
      result = { data: [], status: "empty", message: "" };
      break;
    case "www.content.com":
      result = { data: [1, 2, 3], status: "ready", message: "" };
      break;
    case "www.content.com/assignments":
      result = {
        data: [
          {
            id: 1,
            date_created: "2024-01-31 21:00:30.610279",
            assignment_name: "Data Engineer",
            company_name: "Folksam",
            company_image_url: "",
          },
          {
            id: 2,
            date_created: "2024-02-01 21:00:30.610279",
            assignment_name: "Developer Architect",
            company_name: "Folksam",
            company_image_url: "",
          },
          {
            id: 3,
            date_created: "2024-02-02 21:00:30.610279",
            assignment_name: "Master Data Specialist",
            company_name: "McDonalds",
            company_image_url: "",
          },
          {
            id: 4,
            date_created: "2024-02-02 21:00:30.610279",
            assignment_name: "Pega Lead System Architech",
            company_name: "Nordea Bank",
            company_image_url: "",
          },
        ],
        status: "ready",
        message: "",
      };
      break;
    default:
      result = {
        data: [],
        status: "error",
        message: `Unknow case ${url} found`,
      };
  }

  return result;
}
