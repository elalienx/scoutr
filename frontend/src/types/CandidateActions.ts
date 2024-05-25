// Project files
import Candidate from "./Candidate";

/**
 * About:
 * This is the actions available for the Candidate Reducer.
 * The reducer utilizes useDispatch(), an avanded version of useState()
 * to have more control on the data mutation and writing tests.
 */

interface Set {
  type: "set-candidates";
  payload: Candidate[];
}

interface Add {
  type: "add-candidates";
  payload: Candidate[];
}

interface AddSingle {
  type: "add-single";
  payload: Candidate;
}

interface Edit {
  type: "edit-single";
  payload: { id: number; updates: object }; // in this case unknown is an object with some but not all the keys belonging to Candidate
}

type CandidateActions = Set | Add | AddSingle | Edit;

export default CandidateActions;
