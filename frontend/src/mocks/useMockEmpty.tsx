// Project files
import ResultsAPI from "types/ResultsAPI";

export default function useMockEmpty(uri: string): ResultsAPI {
  return {
    data: [],
    status: "empty",
    message: `Endpoint ${uri} works but does not have data`,
  };
}
