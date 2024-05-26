// Project files
import type Candidate from "types/Candidate";
import type CandidateActions from "types/CandidateActions";
import addCandidates from "./helpers/addCandidates";
import addSingle from "./helpers/addSingle";
import editCandidate from "./helpers/editCandidate";
import setCandidates from "./helpers/setCandidates";

export default function CandidatesReducer(state: Candidate[], actions: CandidateActions) {
  const { type, payload } = actions;

  switch (type) {
    case "set-candidates":
      return setCandidates(payload);
    case "add-candidates":
      return addCandidates(state, payload);
    case "add-single":
      return addSingle(state, payload);
    case "edit-single":
      return editCandidate(state, payload);
    default:
      throw new Error(`Error: Action type ${type} does not exist`);
  }
}
