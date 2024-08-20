// Project files
import type FetchOptions from "types/FetchOptions";
import type ResultsAPI from "types/ResultAPI";
import type StatusPage from "types/StatusPage";

export default async function mockFetchError(uri: string, init: FetchOptions): Promise<ResultsAPI> {
  const data: unknown[] = [];
  const status: StatusPage = "error";
  const message = `The server could not return data from ${uri}`;

  // Safeguard
  if (!init) throw new Error("No parameters passed");

  return { data, status, message };
}
