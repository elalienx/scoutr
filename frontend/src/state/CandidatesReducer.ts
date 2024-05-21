// Project files
import Candidate from "types/Candidate";
import CandidateActions from "types/CandidateActions";
import setCandidates from "./helpers/setCandidates";
import addCandidates from "./helpers/addCandidates";
import editCandidate from "./helpers/editCandidate";

export default function CandidatesReducer(state: Candidate[], actions: CandidateActions) {
  const { type, payload } = actions;

  switch (type) {
    case "set-candidates":
      return setCandidates(payload);
    case "add-candidates":
      return addCandidates(state, payload);
    case "edit-single":
      return editCandidate(state, payload);
    default:
      throw new Error(`Error: Action type ${type} does not exist`);
  }
}
