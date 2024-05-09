// Project files
import Assignment from "types/Assignment";
import FetchOptions from "types/FetchOptions";
import ResultsAPI from "types/ResultsAPI";
import Status from "types/Status";

// prettier-ignore
export default async function fetchAssignment(uri: string, init: FetchOptions): Promise<ResultsAPI> {
  const body = JSON.parse(init.body);
  const errorInit = "The data send to the server appears invalid. Check for typos or update the test for any endpoint changes.";
  const errorURI = "The URI appears invalid. Check for typos or update the test for any endpoint changes.";

  // Safeguards
  if (uri !== "/api/assignments") throw new Error(errorURI);
  if (!body.hasOwnProperty("assignment_name")) throw new Error(errorInit);
  if (!body.hasOwnProperty("company_name")) throw new Error(errorInit);

  // Properties
  const data: Assignment = {
    id: 9999,
    date_created: "2024-12-31",
    assignment_name: body.assignment_name,
    company_name: body.company_name,
    company_image_url: "",
  };
  const message: string = "Created assignment #9999";
  const status: Status = "ready";

  return { data, message, status };
}
