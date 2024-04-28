// Project files
import ResultsAPI from "types/ResultsAPI";

export default function useMockLoading(uri: string): ResultsAPI {
  return { data: [], status: "loading", message: uri };
}
