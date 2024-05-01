// Proejct files
import ResultsAPI from "types/ResultsAPI";

// prettier-ignore
async function postSlowLoading(uri: string, payload: any): Promise<ResultsAPI> {
  const result: ResultsAPI = { data: {}, message: `Loaded data from ${uri}`, status: "ready" };

  await new Promise((resolve) => setTimeout(resolve, 5000)); 

  return result;
}

export default postSlowLoading;
