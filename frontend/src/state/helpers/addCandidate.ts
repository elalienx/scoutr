// Project files
import type Candidate from "types/Candidate";

/**
 * About the safeguards
 * - Missing keys: Even if TypeScript is strong typed, we cannot guarantee that the information comming from the server is valid.
 * - Empty critical values: This protect the frontend in case someone mess up the values on the database.
 */
export default function addCandidate(state: Candidate[], payload: Candidate) {
  // Safeguard
  const errorKey = "Candidate is missing the key id, project_id, linked_in_url and/or name.";
  const errorValue = "Canddiate is missing the value for candidate_name or linked_in_url.";

  // Missing keys
  if (!payload.hasOwnProperty("id")) throw new Error(errorKey);
  if (!payload.hasOwnProperty("assignment_id")) throw new Error(errorKey);
  if (!payload.hasOwnProperty("linked_in_url")) throw new Error(errorKey);
  if (!payload.hasOwnProperty("candidate_name")) throw new Error(errorKey);

  // Empty critical values
  if (payload.candidate_name === "") throw new Error(errorValue);
  if (payload.linked_in_url === "") throw new Error(errorValue);

  // Properties
  const newState = [...state, payload];

  return newState;
}
