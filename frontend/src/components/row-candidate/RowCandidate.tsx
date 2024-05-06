// Project files
import HeaderCandidate from "components/header-candidate/HeaderCandidate";
import ItemBadge from "components/item-badge/ItemBadge";
import ItemCandidate from "components/item-candidate/ItemCandidate";
import ItemCompany from "components/item-company/ItemCompany";
import Candidate from "types/Candidate";
import parseData from "./helpers/parseData";
import "./row-candidate.css";

/** A row containing the complete candidate information. */
export default function RowCandidate(item: Candidate) {
  const { id, notes, relevance, contact_status } = item;

  // Properties
  const parsedData = parseData(item);

  return (
    <tr className="row-candidate">
      <td className="mobile-only-header">
        <HeaderCandidate {...parsedData.header} />
      </td>
      <td className="id column-small" data-label="Id">
        {id}
      </td>
      <td className="candidate column-big" data-label="Candidate">
        <ItemCandidate {...parsedData.candidate} />
      </td>
      <td className="company column-big" data-label="Company">
        <ItemCompany {...parsedData.company} />
      </td>
      <td className="notes column-big" data-label="Notes">
        <small className="trim-text">{notes}</small>
      </td>
      <td className="relevance column-medium" data-label="Relevance">
        {relevance ? <ItemBadge {...parsedData.relevance} /> : null}
      </td>
      <td className="contact column-medium" data-label="Contact">
        {contact_status ? <ItemBadge {...parsedData.contact} /> : null}
      </td>
    </tr>
  );
}
