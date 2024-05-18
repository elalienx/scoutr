// Project files
import Candidate from "types/Candidate";
import Table from "../table/Table";
import Button from "components/button/Button";
import useDialog from "state/DialogContextAPI";
import StateEmpty from "../state-empty/StateEmpty";
import FormCandidates from "../form-candidates/FormCandidates";
import fetchService from "scripts/fetch-service/fetchService";

interface Props {
  /** The candidates to dispaly on the table. */
  state: [Candidate[], Function];

  /** The React component to show when you click the button.  */
  id: number;
}

export default function Content({ state, id }: Props) {
  const [candidates] = state;

  // Global state
  const { showDialog } = useDialog();

  // Components
  const Form = <FormCandidates fetchScript={fetchService} id={id} state={state} />;

  // Safeguard
  if (candidates.length === 0) return <StateEmpty component={Form} />;

  return (
    <div className="page-content">
      <Table candidates={candidates} />
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
