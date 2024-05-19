// Project files
import Candidate from "types/Candidate";
import CandidateActions from "types/CandidateActions";

export default function CandidatesReducer(state: Candidate[], actions: CandidateActions) {
  const { type, payload } = actions;

  switch (type) {
    case "set-candidates":
      return set(payload);
    case "add-candidates":
      return addMany(state, payload);
    case "edit-single":
      return edit(state, payload);
    default:
      throw new Error(`Error: Action type ${type} does not exist`);
  }
}

export function set(payload: Candidate[]) {
  return payload;
}

export function addMany(state: Candidate[], payload: Candidate[]) {
  


  const newState = [...state, ...payload];

  return newState;
}

export function edit(state: Candidate[], payload: { id: number; data: Candidate }) {
  const { id, data } = payload;

  const newState = [...state];
  const index = state.findIndex((item) => item.id === id);

  newState[index] = data;

  return newState;
}
