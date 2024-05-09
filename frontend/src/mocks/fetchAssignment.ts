// Project files
import Assignment from "types/Assignment";
import ResultsAPI from "types/ResultsAPI";

async function fetchAssignment(uri: string, init: object): Promise<ResultsAPI> {
  const { body } = init;
  const data = JSON.parse(body);

  // Safeguards
  // prettier-ignore
  const errorInit = "The data send to the server appears invalid. Check for typos or update the test for any endpoint changes."
  // prettier-ignore
  const errorURI = "The URI appears invalid. Check for typos or update the test for any endpoint changes.";

  if (uri !== "/api/assignments") throw new Error(errorURI);
  if (!data.hasOwnProperty("assignment_name")) throw new Error(errorInit);
  if (!data.hasOwnProperty("company_name")) throw new Error(errorInit);

  // Properties
  const assignment: Assignment = {
    id: 9999,
    date_created: "2024-12-31",
    assignment_name: data.assignment_name,
    company_name: data.company_name,
    company_image_url: "",
  };
  const result: ResultsAPI = {
    data: assignment,
    message: `Created assignment #9999`,
    status: "ready",
  };

  return result;
}

export default fetchAssignment;
