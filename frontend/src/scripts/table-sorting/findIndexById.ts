// Project files
import type Candidate from "types/Candidate";
import type TableIndex from "types/TableIndex";

export default function findIndexById(tableIndexes: TableIndex[], candidate: Candidate): number {
  const item = tableIndexes.find((item) => item.candidate_id === candidate.id);
  const index = item?.table_index || candidate.id;

  return index;
}
