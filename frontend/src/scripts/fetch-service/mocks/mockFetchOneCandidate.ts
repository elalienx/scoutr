// Project files
import Candidate from "types/Candidate";
import FetchOptions from "types/FetchOptions";
import ResultsAPI from "types/ResultsAPI";
import Status from "types/Status";

export default async function mockFetchOneCandidate(uri: string, init: FetchOptions): Promise<ResultsAPI> {
  const body = JSON.parse(init.body);
  const errorInit = "Data send to the server is invalid. Check for typos or update the test if the endpoint changed.";
  const errorURI = "URI is invalid. Check for typos or update the test if the endpoint changed.";

  // Safeguards
  if (uri !== "/api/parse_links/1") throw new Error(errorURI);
  // Check that we passed links and not unparsed_links or any other name for this key
  if (!body.hasOwnProperty("links")) throw new Error(errorInit);
  // Check that the first hardcoded canddiate is Eduardo
  if (body.links[0] !== "https://www.linkedin.com/in/eduardo-alvarez-nowak/") throw new Error(errorInit);

  // Properties
  const data: Candidate[] = [
    {
      id: 1,
      projectId: 1,
      date_created: "2024-12-31",
      linked_in_url: "https://www.linkedin.com/in/eduardo-alvarez-nowak/",
      candidate_name: "Eduardo Alvarez Nowak",
      candidate_job_title: "Tech Education Lead",
      candidate_image_url:
        "https://media.licdn.com/dms/image/C4E03AQHwKgpnjrXkZA/profile-displayphoto-shrink_400_400/0/1643017689481?e=1720656000&v=beta&t=TjDIe27TA5Y1w57y9VTZBTVQXfX3WrgEIFUxNqJjtDU",
      company_name: "Novare Potential",
      company_duration_in_months: 35,
      company_image_url:
        "https://media.licdn.com/dms/image/C4E0BAQHElmOdWZ-xZA/company-logo_100_100/0/1631374829245/novare_potential_logo?e=1723680000&v=beta&t=jZQ-Qg3AEpJn1_FqMV0xjoWRv3Zo640Ot5kf5uqEXuo",
      notes: "",
      relevance: 0,
      contact_status: 0,
      contact_date: "",
    },
  ];
  const status: Status = "ready";
  const message = "Candidates scanned";

  return { data, status, message };
}
