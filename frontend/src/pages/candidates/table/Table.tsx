// Node modules
import { useMemo, type Dispatch } from "react";

// Project files
import RowCandidate from "components/row-candidate/RowCandidate";
import TableHead from "components/table-head/TableHead";
import type Candidate from "types/Candidate";
import type CandidateActions from "types/CandidateActions";
import headers from "./headers.json";

interface Props {
  /** The candidates to display on the table. */
  state: [Candidate[], Dispatch<CandidateActions>];
}

export default function Table({ state }: Props) {
  const [candidates, dispatch] = state;

  // Properties
  const memoIndexes = useMemo(() => generateIndexById(candidates), [candidates.length]);

  // Components
  const Rows = candidates.map((item) => (
    <RowCandidate
      key={item.id}
      candidate={item}
      index={findTableIndex(memoIndexes, item)}
      dispatch={dispatch}
    />
  ));

  return (
    <table>
      <TableHead headers={headers} candidates={candidates} dispatch={dispatch} />
      <tbody>{Rows}</tbody>
    </table>
  );
}

interface TableIndex {
  candidate_id: number;
  table_index: number;
}

function findTableIndex(tableIndexes: TableIndex[], candidate: Candidate): number {
  const item = tableIndexes.find((item) => item.candidate_id === candidate.id);
  const index = item?.table_index || candidate.id;

  return index;
}

function generateIndexById(candidates: Candidate[]): TableIndex[] {
  console.log("Regenerating...");
  const clonnedArray = [...candidates];
  const orderedCandidates = clonnedArray.sort((a, b) => a.id - b.id);
  const result = orderedCandidates.map((item, index) => {
    const candidate_id = item.id;
    const table_index = index + 1;

    return { candidate_id, table_index };
  });

  return result;
}
