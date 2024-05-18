// Project files
import HeaderCandidate from "components/header-candidate/HeaderCandidate";
import ItemBadge from "components/item-badge/ItemBadge";
import ItemCandidate from "components/item-candidate/ItemCandidate";
import ItemCompany from "components/item-company/ItemCompany";
import Candidate from "types/Candidate";
import parseData from "./helpers/parseData";
import "./row-candidate.css";

interface Props {
  /** The candidate to present */
  candidate: Candidate;

  /** The row number. Note, we don't use the candidate.id because all assignments save the candidates a single table so the ID do not have a sequence for each assignment */
  index: number;
}

/** A row containing the complete candidate information. */
export default function RowCandidate({ candidate, index }: Props) {
  const { notes, relevance, contact_status } = candidate;

  // Properties
  const parsedData = parseData(candidate, index);

  return (
    <tr className="row-candidate">
      <td className="mobile-only-header">
        <HeaderCandidate {...parsedData.header} />
      </td>
      <td className="id column-small" data-label="Id">
        {index}
      </td>
      <td className="column-big" data-label="Candidate">
        <ItemCandidate {...parsedData.candidate} />
      </td>
      <td className="column-big" data-label="Company">
        <ItemCompany {...parsedData.company} />
      </td>
      <td className="column-big" data-label="Notes">
        <small className="trim-text">{notes}</small>
      </td>
      <td className="column-medium" data-label="Relevance">
        {relevance > 0 && <ItemBadge {...parsedData.relevance} />}
      </td>
      <td className="column-medium" data-label="Contact">
        {contact_status > 0 && <ItemBadge {...parsedData.contact} />}
      </td>
    </tr>
  );
}
