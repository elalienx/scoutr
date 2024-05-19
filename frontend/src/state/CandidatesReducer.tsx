import Candidate from "types/Candidate";

interface CandidateActions {
  type: "set" | "add-many" | "edit";
  payload?: any;
}

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
  return payload;
}

function addMany(state: Candidate[], payload: Candidate[]) {
  console.log("addMany payload", payload);

  const newState = [...state, ...payload];

  return newState;
}

function edit(state: Candidate[], payload: { id: number; newValues: object }) {
  const { id, newValues } = payload;

  const newState = [...state];
  const index = state.findIndex((item) => item.id === id);
  const editedCandidate = { ...state[index], newValues };

  newState[index] = editedCandidate;

  return newState;
}
