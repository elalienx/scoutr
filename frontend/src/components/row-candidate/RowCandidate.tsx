// Node modules
import type { Dispatch } from "react";

// Project files
import HeaderCandidate from "components/header-candidate/HeaderCandidate";
import ItemBadge from "components/item-badge/ItemBadge";
import ItemCandidate from "components/item-candidate/ItemCandidate";
import ItemCompany from "components/item-company/ItemCompany";
import FormEdit from "forms/edit/FormEdit";
import fields from "forms/edit/fields-candidate";
import fetchService from "scripts/fetch/fetchService";
import useDialog from "state/DialogContextAPI";
import type Candidate from "types/Candidate";
import type CandidateActions from "types/CandidateActions";
import parseData from "./helpers/parseData";
import "./row-candidate.css";

interface Props {
  /** The candidate to present. */
  candidate: Candidate;

  /** The row number, not the candidate ID, is used since all assignments store candidates in a single table, making their IDs non-sequential. */
  index: number;

  /** A function that uses reducers to update the candidates state. */
  dispatch: Dispatch<CandidateActions>;
}

/** A row containing the complete candidate information. */
export default function RowCandidate({ candidate, index, dispatch }: Props) {
  const { id, notes, relevance, contact_status } = candidate;

  // Global state
  const { showDialog } = useDialog();

  // Properties
  const parsedData = parseData(candidate, index);
  const uri = "/api/candidates/";

  // Methods
  function onClick(key: keyof Candidate) {
    const field = fields.find((item) => item.id === key);

    // Safeguard
    if (field === undefined) {
      alert(`Error: Cannot find an input field for ${key}`);
      return;
    }

    field.defaultValue = candidate[key];

    showDialog(
      <FormEdit
        id={id}
        fields={[field]}
        uri={uri}
        fetchScript={fetchService}
        dispatcher={dispatch}
      />
    );
  }

  return (
    <tr className="row-candidate">
      {/* 📱 Mobile only header */}
      <td className="mobile-only-header">
        <HeaderCandidate {...parsedData.header} />
      </td>

      {/* 🪪 Id */}
      <td className="id" data-label="Id">
        {index}
      </td>

      {/* 👨🏻 Canddiate */}
      <td className="candidate" data-label="Candidate">
        <ItemCandidate candidate={candidate} />
      </td>

      {/* 🏢 Company */}
      <td className="company" data-label="Company">
        <ItemCompany candidate={candidate} />
      </td>

      {/* 📝 Notes */}
      <td data-label="Notes" className="notes" onClick={() => onClick("notes")} title={notes}>
        <small className="trim-text">{notes}</small>
      </td>

      {/* 📈 Relevance */}
      <td className="relevance" data-label="Relevance" onClick={() => onClick("relevance")}>
        {relevance > 0 && <ItemBadge {...parsedData.relevance} />}
      </td>

      {/* 📲 Contact */}
      <td className="contact" data-label="Contact" onClick={() => onClick("contact_status")}>
        {contact_status > 0 && <ItemBadge {...parsedData.contact} />}
      </td>
    </tr>
  );
}
