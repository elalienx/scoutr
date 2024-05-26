// Project files
import type Candidate from "types/Candidate";

export default function addCandidate(state: Candidate[], payload: Candidate) {
  // Properties
  const newState = [...state, payload];

  return newState;
}
