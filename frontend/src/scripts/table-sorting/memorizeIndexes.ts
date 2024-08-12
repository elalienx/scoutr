// Project files
import type Candidate from "types/Candidate";
import type TableIndex from "types/TableIndex";

/**
 * About:
 * Because we cannot promise the database will give sequential id's to candidates,
 * when users are adding and deleting candidates on multiple projects,
 * This table will generate a table index to display that will keep the index instact,
 * even if you sort the table.
 *
 * @param candidates
 * @returns TableIndex
 */
export default function memorizeIndexes(candidates: Candidate[]): TableIndex {
  const clonnedArray = [...candidates];
  const orderedCandidates = clonnedArray.sort((a, b) => a.id - b.id);
  const result: TableIndex = {};

  orderedCandidates.forEach((candidate, index) => {
    result[candidate.id] = index + 1;
  });

  return result;
}
