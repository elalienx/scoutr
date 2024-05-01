// Proejct files
import ResultsAPI from "types/ResultsAPI";

// prettier-ignore
async function fetchPostLoading(uri: string, payload: any): Promise<ResultsAPI> {
  const result: ResultsAPI = { data: {}, message: `Loading data from ${uri}`, status: "loading" };

  return result;
}

export default fetchPostLoading;
