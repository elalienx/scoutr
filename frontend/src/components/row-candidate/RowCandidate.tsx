// Project files
import HeaderCandidate from "components/header-candidate/HeaderCandidate";
import ItemBadge from "components/item-badge/ItemBadge";
import ItemCandidate from "components/item-candidate/ItemCandidate";
import ItemCompany from "components/item-company/ItemCompany";
import fields from "data/candidate";
import useDialog from "state/DialogContextAPI";
import Candidate from "types/Candidate";
import parseData from "./helpers/parseData";
import FormEdit from "forms/edit/FormEdit";
import fetchService from "scripts/fetch-service/fetchService";
import "./row-candidate.css";
import { Dispatch } from "react";
import CandidateActions from "types/CandidateActions";

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

    field.defaultValue = candidate[key].toString();

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
      <td onClick={() => onClick("notes")} className="notes column-big hover" data-label="Notes">
        <small className="trim-text">{notes}</small>
      </td>
      <td
        onClick={() => onClick("relevance")}
        className="relevance column-medium hover"
        data-label="Relevance"
      >
        {relevance > 0 && <ItemBadge {...parsedData.relevance} />}
      </td>
      <td
        onClick={() => onClick("contact_status")}
        className="contact column-medium hover"
        data-label="Contact"
      >
        {contact_status > 0 && <ItemBadge {...parsedData.contact} />}
      </td>
    </tr>
  );
}
