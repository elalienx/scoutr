// Project files
import ResultsAPI from "types/ResultAPI";

export default function mockUseEmpty(uri: string): ResultsAPI {
  return {
    data: [],
    status: "ready",
    message: `Endpoint ${uri} works but does not have data`,
  };
}
