// Node modules
import type { Dispatch } from "react";

// Project files
import RowCandidate from "components/row-candidate/RowCandidate";
import TableHead from "components/table-head/TableHead";
import type Candidate from "types/Candidate";
import type CandidateActions from "types/CandidateActions";
import headers from "./headers.json";
import "./table.css";

interface Props {
  /** The candidates to display on the table. */
  state: [Candidate[], Dispatch<CandidateActions>];
}

export default function Table({ state }: Props) {
  const [candidates, dispatch] = state;

  // Components
  const Rows = candidates.map((item, index) => (
    <RowCandidate key={item.id} candidate={item} index={index + 1} dispatch={dispatch} />
  ));

  // 🔔 Refactor: we use dispatch so modify that on TableHead
  return (
    <table>
      <TableHead headers={headers} dataState={state} />
      <tbody>{Rows}</tbody>
    </table>
  );
}
