/**
 * About:
 * This is the actions available for the Candidate Reducer.
 * The reducer utilizes useDispatch(), an avanded version of useState()
 * that allow us to have more control about the data mutation and write tests.
 */
export default interface CandidateActions {
  /** The mutations allowed to canddiate.
   * - set: Replaces the whole candidate array when data comes from the server.
   * - add-many: Add additional candidates to the array.
   * - edit: Allows to modify the content of 1 candidate by its id.
   * */
  type: "set" | "add-many" | "edit";

  /** The data to modify for either all the candidates or 1 in particular. */
  payload: any;
}
