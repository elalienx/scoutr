// Node modules
import { useMemo, type Dispatch } from "react";

// Project files
import RowCandidate from "components/row-candidate/RowCandidate";
import TableHead from "components/table-head/TableHead";
import type Candidate from "types/Candidate";
import type CandidateActions from "types/CandidateActions";
import memorizeIndexes from "scripts/table-sorting/memorizeIndexes";
import headers from "./headers.json";
import "./table.css";

interface Props {
  /** The candidates to display on the table. */
  state: [Candidate[], Dispatch<CandidateActions>];
}

export default function Table({ state }: Props) {
  const [candidates, dispatch] = state;

  // Properties
  const tableIndexes = useMemo(() => memorizeIndexes(candidates), [candidates.length]);

  // Components
  const Rows = candidates.map((item) => (
    <RowCandidate
      key={item.id}
      index={tableIndexes[item.id]}
      candidate={item}
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
