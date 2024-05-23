// Project files
import Candidate from "types/Candidate";

export default function repliedCandidates(candidates: Candidate[]): number {
  const status_uncontacted = 0;
  const status_not_replied = 5;
  const filter = candidates.filter(
    (item) => item.contact_status > status_uncontacted && item.contact_status < status_not_replied,
  );
  const result = filter.length;

  return result;
}
