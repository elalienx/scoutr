// Project files
import type ResultsAPI from "types/ResultAPI";
import type StatusPage from "types/StatusPage";

async function fetchService(uri: string, options: object): Promise<ResultsAPI> {
  let result: ResultsAPI = {
    data: undefined,
    message: "Could not get data from the server",
    status: "error",
  };

  try {
    const request = await fetch(uri, options);
    const data = await request.json();
    const status: StatusPage = "ready";
    const message = "All good";

    result = { data, status, message };
  } catch (error) {
    console.error(error);
  }

  return result;
}

export default fetchService;
