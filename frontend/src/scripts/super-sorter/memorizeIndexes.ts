// Project files
import type Candidate from "types/Candidate";
import type TableIndex from "types/TableIndex";

/**
 * Because we cannot promise the database will give sequential id's to candidates, when users are adding and deleting candidates on multiple projects,
 * This table will generate a table index to display that will keep the index instact, even if you sort the table.
 */
export default function memorizeIndexes(candidates: Candidate[]): TableIndex[] {
  const clonnedArray = [...candidates];
  const orderedCandidates = clonnedArray.sort((a, b) => a.id - b.id);
  const result = orderedCandidates.map((item, index) => ({
    candidate_id: item.id,
    table_index: index + 1,
  }));

  return result;
}
