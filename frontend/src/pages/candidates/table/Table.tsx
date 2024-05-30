// Node modules
import type { Dispatch } from "react";

// Project files
import RowCandidate from "components/row-candidate/RowCandidate";
import type Candidate from "types/Candidate";
import type CandidateActions from "types/CandidateActions";
import "./table.css";

interface Props {
  /** The candidates to display on the table. */
  state: [Candidate[], Dispatch<CandidateActions>];
}

export default function Table({ state }: Props) {
  const [candidates, dispatch] = state;

  // Properties
  const headers = ["Id", "Candidate", "Company", "Notes", "Relevance", "Contact"];

  // Components
  const Headers = headers.map((item, index) => <th key={index}>{item}</th>);
  const Rows = candidates.map((item, index) => (
    <RowCandidate key={item.id} candidate={item} index={index + 1} dispatch={dispatch} />
  ));

  return (
    <table>
      <thead>
        <tr>{Headers}</tr>
      </thead>
      <tbody>{Rows}</tbody>
    </table>
  );
}
