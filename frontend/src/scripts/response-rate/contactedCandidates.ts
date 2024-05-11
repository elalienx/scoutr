import Candidate from "types/Candidate";

export default function contactedCandidates(candidates: Candidate[]): Candidate[] {
  const status_uncontacted = 0;

  return candidates.filter((item) => item.contact_status > status_uncontacted);
}
