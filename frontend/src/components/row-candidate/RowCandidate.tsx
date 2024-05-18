// Project files
import HeaderCandidate from "components/header-candidate/HeaderCandidate";
import ItemBadge from "components/item-badge/ItemBadge";
import ItemCandidate from "components/item-candidate/ItemCandidate";
import ItemCompany from "components/item-company/ItemCompany";
import Candidate from "types/Candidate";
import parseData from "./helpers/parseData";
import "./row-candidate.css";
import useDialog from "state/DialogContextAPI";

interface Props {
  /** The candidate to present */
  candidate: Candidate;

  /** The row number. Note, we don't use the candidate.id because all assignments save the candidates a single table so the ID do not have a sequence for each assignment */
  index: number;
}

/** A row containing the complete candidate information. */
export default function RowCandidate({ candidate, index }: Props) {
  const { notes, relevance, contact_status } = candidate;

  // Global state
  const { showDialog } = useDialog();

  // Properties
  const parsedData = parseData(candidate, index);

  // Methods
  function onClick(key: string) {
    showDialog(<p className="form">You clicked on {key}</p>);
  }

  return (
    <tr className="row-candidate">
      <td className="mobile-only-header">
        <HeaderCandidate {...parsedData.header} />
      </td>
      <td className="id column-small" data-label="Id">
        {index}
      </td>
      <td className="candidate column-big" data-label="Candidate">
        <ItemCandidate {...candidate} />
      </td>
      <td className="company column-big" data-label="Company">
        <ItemCompany {...candidate} />
      </td>
      <td onClick={() => onClick("notes")} className="notes column-big" data-label="Notes">
        <small className="trim-text">{notes}</small>
      </td>
      <td className="relevance column-medium" data-label="Relevance">
        {relevance > 0 && <ItemBadge {...parsedData.relevance} />}
      </td>
      <td className="contact column-medium" data-label="Contact">
        {contact_status > 0 && <ItemBadge {...parsedData.contact} />}
      </td>
    </tr>
  );
}
