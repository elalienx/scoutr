// Project files
import Assignment from "types/Assignment";
import FetchOptions from "types/FetchOptions";
import ResultsAPI from "types/ResultsAPI";
import Status from "types/Status";

export default async function fetchAssignmentSlow(uri: string, init: FetchOptions): Promise<ResultsAPI> {
  const body = JSON.parse(init.body);
  const errorInit = "Data send to the server is invalid. Check for typos or update the test if the endpoint changed.";

  // Safeguards
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

  await waitForSeconds(5);

  return { data, message, status };
}

async function waitForSeconds(seconds: number) {
  const secondToMiliseconds = 1000;

  await new Promise((resolve) => setTimeout(resolve, seconds * secondToMiliseconds));
}