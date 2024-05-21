// Project files
import FetchOptions from "types/FetchOptions";
import ResultsAPI from "types/ResultAPI";
import Status from "types/Status";

async function mockFetchEditCandidateNameAndJob(
  uri: string,
  init: FetchOptions,
): Promise<ResultsAPI> {
  const body = JSON.parse(init.body);
  const errorInit =
    "Data send to the server is invalid. Check for typos or update the test if the endpoint changed.";
  const errorURI = "URI is invalid. Check for typos or update the test if the endpoint changed.";

  // Safeguards
  if (uri !== "/api/candidates/1") throw new Error(errorURI);
  if (!body.hasOwnProperty("candidate_name")) throw new Error(errorInit);
  if (!body.hasOwnProperty("candidate_job_title")) throw new Error(errorInit);

  // Properties
  const data = {
    candidate_name: "Eduardo Alvarez",
    candidate_job_title: "Graphic Designer",
  };
  const message: string = "Edited candidate";
  const status: Status = "ready";

  return { data, message, status };
}

export default mockFetchEditCandidateNameAndJob;
