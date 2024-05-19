// Project files
import RowCandidate from "components/row-candidate/RowCandidate";
import Candidate from "types/Candidate";
import "./table.css";
import { Dispatch } from "react";
import CandidateActions from "types/CandidateActions";

interface Props {
  /** The candidates to dispaly on the table. */
  state: [Candidate[], Dispatch<CandidateActions>];
}

export default function Table({ state }: Props) {
  const [candidates, dispatch] = state;

  // Properties
  const headers = ["Id", "Candidate", "Company", "Notes", "Relevance", "Contact"];
  const sortedById = candidates.sort((a, b) => a.id - b.id);

  // Components
  const Headers = headers.map((item, index) => <th key={index}>{item}</th>);
  const Rows = sortedById.map((item, index) => (
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
