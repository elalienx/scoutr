// Project files
import RowCandidate from "components/row-candidate/RowCandidate";
import Candidate from "types/Candidate";
import "./table.css";

interface Props {
  /** The candidates belonging to an assignment. */
  candidates: Candidate[];
}

export default function Table(item: Props) {
  const { candidates } = item;

  // Properties
  // prettier-ignore
  const headers = ["Id", "Candidate","Company","Notes","Relevance","Contact"]

  // Components
  const Headers = headers.map((item, index) => <th key={index}>{item}</th>);
  const Rows = candidates.map((item) => <RowCandidate {...item} />);

  return (
    <table className="table">
      <thead>
        <tr>{Headers}</tr>
      </thead>
      <tbody>{Rows}</tbody>
    </table>
  );
}
