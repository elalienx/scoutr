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
  const headers = ["Id", "Candidate", "Company", "Notes", "Relevance", "Contact"];

  // Components
  const Headers = headers.map((item, index) => <th key={index}>{item}</th>);
  const Rows = candidates.map((item, index) => <RowCandidate key={item.id} candidate={item} index={index} />);

  return (
    <table className="table">
      <thead>
        <tr>{Headers}</tr>
      </thead>
      <tbody>{Rows}</tbody>
    </table>
  );
}
