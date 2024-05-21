// Project files
import Candidate from "types/Candidate";

type Payload = {
  id: number;
  updates: object;
};

export default function editCandidate(state: Candidate[], payload: Payload) {
  const { id, updates } = payload;

  // Safeguard
  const error = "You cannot modify the properties id or project_id of a candidate.";

  if (updates.hasOwnProperty("id")) throw new Error(error);
  if (updates.hasOwnProperty("project_id")) throw new Error(error);

  // Properties
  const index = state.findIndex((item) => item.id === id);
  const candidate = state[index];
  const editedCandidate = { ...candidate, ...updates };
  const newState = [...state];

  newState[index] = editedCandidate;

  return newState;
}
