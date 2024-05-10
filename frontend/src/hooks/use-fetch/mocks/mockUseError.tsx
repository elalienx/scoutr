// Project files
import ResultsAPI from "types/ResultsAPI";

export default function mockUseError(uri: string): ResultsAPI {
  // safeguard
  if (uri === "") return { data: [], status: "error", message: `URI is empty` };

  return { data: [], status: "error", message: `Can't load ${uri}` };
}
