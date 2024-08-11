// Project files
import type Candidate from "types/Candidate";
import type TableIndex from "types/TableIndex";

export default function memorizeIndexes(candidates: Candidate[]): TableIndex[] {
  console.log("Regenerating...");
  const clonnedArray = [...candidates];
  const orderedCandidates = clonnedArray.sort((a, b) => a.id - b.id);
  const result = orderedCandidates.map((item, index) => ({
    candidate_id: item.id,
    table_index: index + 1,
  }));

  return result;
}
