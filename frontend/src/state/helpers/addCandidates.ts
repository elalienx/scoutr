// Project files
import Candidate from "types/Candidate";

export default function addCandidates(state: Candidate[], payload: Candidate[]) {
  // Properties
  const newState = [...state, ...payload];

  return newState;
}
