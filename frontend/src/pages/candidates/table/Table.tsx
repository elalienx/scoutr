// Node modules
import type { Dispatch } from "react";

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
  const tableIndexes = generateIndexById(candidates);

  // Components
  const Rows = candidates.map((item) => {
    const indexItem = tableIndexes.find((tableIndexItem) => tableIndexItem.myId === item.id);
    const index = indexItem?.myIndex || item.id;

    return <RowCandidate key={item.id} candidate={item} index={index} dispatch={dispatch} />;
  });

  return (
    <table>
      <TableHead headers={headers} candidates={candidates} dispatch={dispatch} />
      <tbody>{Rows}</tbody>
    </table>
  );
}

function generateIndexById(candidates: Candidate[]) {
  const clonnedArray = [...candidates];
  const orderedCandidates = clonnedArray.sort((a, b) => a.id - b.id);
  const result = orderedCandidates.map((item, index) => {
    const myId = item.id;
    const myIndex = index + 1;

    return { myIndex, myId };
  });

  return result;
}
