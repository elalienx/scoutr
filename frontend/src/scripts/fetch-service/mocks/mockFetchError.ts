// Project files
import FetchOptions from "types/FetchOptions";
import ResultsAPI from "types/ResultAPI";
import StatusPage from "types/Status";

export default async function mockFetchError(uri: string, init: FetchOptions): Promise<ResultsAPI> {
  const data: unknown[] = [];
  const status: StatusPage = "error";
  const message = `The server could not return data from ${uri}`;

  return { data, status, message };
}
