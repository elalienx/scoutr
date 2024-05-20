import Candidate from "types/Candidate";

export default function contactedCandidates(candidates: Candidate[]): Candidate[] {
  const status_uncontacted = 0;
  const status_wrote_but_no_reply = 5;

  return candidates.filter(
    (item) =>
      item.contact_status > status_uncontacted && item.contact_status < status_wrote_but_no_reply,
  );
}
