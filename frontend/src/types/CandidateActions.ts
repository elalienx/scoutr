// Project files
import type Candidate from "./Candidate";

/**
 * About:
 * This is the actions available for the Candidate Reducer.
 * The reducer utilizes useDispatch(), an advanced version of useState()
 * to have more control on the data mutation and writing tests.
 */
type CandidateActions = Set | Add | Edit;

interface Set {
  type: "set-candidates";
  payload: Candidate[];
}

interface Add {
  type: "add-single";
  payload: Candidate;
}

interface Edit {
  type: "edit-single";
  payload: { id: number; updates: object };
}

export default CandidateActions;
