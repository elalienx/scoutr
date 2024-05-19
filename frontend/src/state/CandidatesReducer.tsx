// Project files
import Candidate from "types/Candidate";
import CandidateActions from "types/CandidateActions";

export default function CandidatesReducer(state: Candidate[], actions: CandidateActions) {
  const { type, payload } = actions;

  switch (type) {
    case "set":
      return set(payload);
    case "add-many":
      return addMany(state, payload);
    case "edit":
      return edit(state, payload);
    default:
      throw new Error(`Error: Action type ${type} does not exist`);
  }
}

function set(payload: Candidate[]) {
  console.log("CandidatesReducer() set() payload", payload);

  return payload;
}

function addMany(state: Candidate[], payload: Candidate[]) {
  const newState = [...state, ...payload];

  return newState;
}

function edit(state: Candidate[], payload: { id: number; data: Candidate }) {
  const { id, data } = payload;

  const newState = [...state];
  const index = state.findIndex((item) => item.id === id);

  newState[index] = data;

  return newState;
}
