// Project files
import Candidate from "types/Candidate";

type Payload = {
  id: number;
  data: Candidate;
};

export default function editCandidate(state: Candidate[], payload: Payload) {
  const { id, data } = payload;

  // Properties
  const newState = [...state];
  const index = state.findIndex((item) => item.id === id);

  newState[index] = data;

  return newState;
}
