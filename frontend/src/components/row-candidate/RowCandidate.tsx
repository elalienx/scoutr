// Node modules
import type { Dispatch } from "react";

// Project files
import HeaderCandidate from "components/header-candidate/HeaderCandidate";
import ItemBadge from "components/item-badge/ItemBadge";
import ItemCandidate from "components/item-candidate/ItemCandidate";
import ItemCompany from "components/item-company/ItemCompany";
import FormEdit from "forms/edit/FormEdit";
import fetchService from "scripts/fetch-service/fetchService";
import useDialog from "state/DialogContextAPI";
import type Candidate from "types/Candidate";
import type CandidateActions from "types/CandidateActions";
import parseData from "./helpers/parseData";
import fields from "./fields";
import "./row-candidate.css";

interface Props {
  /** The candidate to present */
  candidate: Candidate;

  /** The row number. Note, we don't use the candidate.id because all assignments save the candidates a single table so the ID do not have a sequence for each assignment */
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
      />,
    );
  }
  return (
    <tr className="row-candidate">
      {/* 📱 Mobile only header */}
      <td className="mobile-only-header">
        <HeaderCandidate {...parsedData.header} />
      </td>

      {/* 🪪 Id */}
      <td className="id column-small" data-label="Id">
        {index}
      </td>

      {/* 👨🏻 Canddiate */}
      <td className="candidate column-big hover" data-label="Candidate">
        <ItemCandidate item={candidate} onClick={onClick} />
      </td>

      {/* 🏢 Company */}
      <td className="company column-big hover" data-label="Company">
        <ItemCompany item={candidate} onClick={onClick} />
      </td>

      {/* 📝 Notes */}
      <td
        onClick={() => onClick("notes")}
        className="notes column-big hover"
        data-label="Notes"
        title={notes}
      >
        <small className="trim-text">{notes}</small>
      </td>

      {/* 📈 Relevance */}
      <td
        onClick={() => onClick("relevance")}
        className="relevance column-medium hover"
        data-label="Relevance"
      >
        {relevance > 0 && <ItemBadge {...parsedData.relevance} />}
      </td>

      {/* 📲 Contact */}
      <td
        onClick={() => onClick("contact_status")}
        className="contact column-medium hover"
        data-label="Contact"
        title=""
      >
        {contact_status > 0 && <ItemBadge {...parsedData.contact} />}
      </td>
    </tr>
  );
}
