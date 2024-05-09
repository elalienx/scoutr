// Project files
import Assignment from "types/Assignment";
import ResultsAPI from "types/ResultsAPI";

async function fetchAssignment(uri: string, init: object): Promise<ResultsAPI> {
  // test that init.body has assignment_name and company_name
  console.log(uri, init);

  const assignment: Assignment = {
    id: 9999,
    date_created: "2024-01-31",
    assignment_name: "CPU Engineer",
    company_name: "Qualcom",
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
