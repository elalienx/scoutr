export default function useFetchMock(url: string) {
  switch (url) {
    case "www.loading.com":
      return { data: [], status: "loading", message: "" };
    case "www.error.com":
      return { data: [], status: "error", message: "" };
    case "www.empty.com":
      return { data: [], status: "empty", message: "" };
    case "www.content.com":
      return { data: [1, 2, 3], status: "content", message: "" };
    case "www.content.com/assignments":
      return {
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
        status: "content",
        message: "",
      };
    default:
      throw new Error(`Case url: ${url} not found`);
  }
}
