// Project files
import type Candidate from "types/Candidate";

export default function addCandidate(state: Candidate[], payload: Candidate) {
  // Safeguard
  const error = "The candidate missing critical properties id, project_id, and/or linked_in_url";

  if (payload.hasOwnProperty("id")) throw new Error(error);
  if (payload.hasOwnProperty("project_id")) throw new Error(error);
  if (payload.hasOwnProperty("linked_in_url")) throw new Error(error);

  // Properties
  const newState = [...state, payload];

  return newState;
}
