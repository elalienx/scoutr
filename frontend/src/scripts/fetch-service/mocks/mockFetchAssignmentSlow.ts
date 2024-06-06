// Project files
import waitForSeconds from "scripts/waitForSeconds";
import type Assignment from "types/Assignment";
import type FetchOptions from "types/FetchOptions";
import type ResultsAPI from "types/ResultAPI";
import type StatusPage from "types/StatusPage";

async function mockFetchAssignmentSlow(uri: string, init: FetchOptions): Promise<ResultsAPI> {
  const body = JSON.parse(init.body);
  const errorProblem = "Data send to the server is invalid.";
  const errorSolution = "Check for typos or update the test if the endpoint changed.";
  const errorMessage = `${errorProblem} ${errorSolution}`;

  // Safeguards
  if (uri === "") throw new Error("Empty uri");
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
  const status: StatusPage = "ready";

  await waitForSeconds(0.5);

  return { data, message, status };
}

export default mockFetchAssignmentSlow;
