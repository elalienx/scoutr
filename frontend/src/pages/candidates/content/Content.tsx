// Project files
import Button from "components/button/Button";
import FormParseLinksSSE from "forms/parse-links-sse/FormParseLinksSSE";
import fetchService from "scripts/fetch-service/fetchService";
import useDialog from "state/DialogContextAPI";
import Candidate from "types/Candidate";
import CandidateActions from "types/CandidateActions";
import StateEmpty from "../state-empty/StateEmpty";
import Table from "../table/Table";
import { Dispatch } from "react";

interface Props {
  /** The candidates to dispaly on the table. */
  state: [Candidate[], Dispatch<CandidateActions>];

  /** The React component to show when you click the button.  */
  id: number;
}

export default function Content({ state, id }: Props) {
  const [candidates, dispatch] = state;

  // Global state
  const { showDialog } = useDialog();

  // Components
  const Form = <FormParseLinksSSE fetchScript={fetchService} id={id} dispatch={dispatch} />;

  // Safeguard
  if (candidates.length === 0) return <StateEmpty component={Form} />;

  return (
    <div className="candidates">
      <Table state={state} />
      <Button
        big
        icon_prefix="fab"
        icon="linkedin"
        label={"Add more candidates"}
        onClick={() => showDialog(Form)}
        primary
      />
    </div>
  );
}
