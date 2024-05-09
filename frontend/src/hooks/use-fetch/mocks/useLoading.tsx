// Project files
import ResultsAPI from "types/ResultsAPI";

export default function useLoading(uri: string): ResultsAPI {
  return { data: [], status: "loading", message: uri };
}
