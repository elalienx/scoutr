// Project files
import ResultsAPI from "types/ResultsAPI";

export default function useMockError(uri: string): ResultsAPI {
  return { data: [], status: "error", message: `Can't load ${uri}` };
}
