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
    default:
      throw new Error(`Case url: ${url} not found`);
  }
}
