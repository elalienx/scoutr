// Project files
import type Candidate from "types/Candidate";

export default function contactedCandidates(candidates: Candidate[]): number {
  const status_uncontacted = 0;
  const filter = candidates.filter((item) => item.contact_status > status_uncontacted);
  const result = filter.length;

  return result;
}
