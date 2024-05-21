// Project files
import Candidate from "types/Candidate";

export default function set(payload: Candidate[]) {
  // Properties
  const error = "You cannot clear the candidate state with this command.";

  // safeguard
  if (payload.length === 0) throw new Error(error);

  return payload;
}
