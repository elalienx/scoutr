// Project files
import RowCandidate from "components/row-candidate/RowCandidate";
import Candidate from "types/Candidate";
import "./table.css";

interface Props {
  candidates: Candidate[];
}

export default function Table({ candidates }: Props) {
  // Properties
  const headers = ["Id", "Candidate", "Company", "Notes", "Relevance", "Contact"];
  const sortedById = candidates.sort((a, b) => a.id - b.id);

  // Components
  const Headers = headers.map((item, index) => <th key={index}>{item}</th>);
  const Rows = sortedById.map((item, index) => (
    <RowCandidate key={item.id} candidate={item} index={index + 1} />
  ));

  return (
    <table className="table">
      <thead>
        <tr>{Headers}</tr>
      </thead>
      <tbody>{Rows}</tbody>
    </table>
  );
}
