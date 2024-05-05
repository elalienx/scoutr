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
  // Properties
  const data = parseData(item);
  const { header, candidate, company } = data;
  const { relevanceBadge, contactBadge } = data;
  const { id, notes, relevance, contact_status } = item;

  return (
    <tr className="row-candidate">
      <td className="mobile-only-header">
        <HeaderCandidate {...header} />
      </td>
      <td className="id column-small" data-label="Id">
        {id}
      </td>
      <td className="candidate column-big" data-label="Candidate">
        <ItemCandidate {...candidate} />
      </td>
      <td className="company column-big" data-label="Company">
        <ItemCompany {...company} />
      </td>
      <td className="notes column-big" data-label="Notes">
        <small className="trim-text">{notes}</small>
      </td>
      <td className="relevance column-medium" data-label="Relevance">
        {relevance ? <ItemBadge {...relevanceBadge} /> : null}
      </td>
      <td className="contact column-medium" data-label="Contact">
        {contact_status ? <ItemBadge {...contactBadge} /> : null}
      </td>
    </tr>
  );
}
