// Project files
import waitForSeconds from "scripts/waitForSeconds";
import Assignment from "types/Assignment";
import FetchOptions from "types/FetchOptions";
import ResultsAPI from "types/ResultAPI";
import Status from "types/Status";

async function mockFetchAssignmentSlow(uri: string, init: FetchOptions): Promise<ResultsAPI> {
  const body = JSON.parse(init.body);
  const errorProblem = "Data send to the server is invalid.";
  const errorSolution = "Check for typos or update the test if the endpoint changed.";
  const errorMessage = `${errorProblem} ${errorSolution}`;

  // Safeguards
  if (!body.hasOwnProperty("assignment_name")) throw new Error(errorMessage);
  if (!body.hasOwnProperty("company_name")) throw new Error(errorMessage);

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

  await waitForSeconds(1);

  return { data, message, status };
}

export default mockFetchAssignmentSlow;
