// Project files
import Button from "components/button/Button";
import FormParseLinks from "forms/parse-links/FormParseLinks";
import fetchService from "scripts/fetch-service/fetchService";
import useDialog from "state/DialogContextAPI";
import Candidate from "types/Candidate";
import StateEmpty from "../state-empty/StateEmpty";
import Table from "../table/Table";

interface Props {
  /** The candidates to dispaly on the table. */
  state: [Candidate[], Function];

  /** The React component to show when you click the button.  */
  id: number;
}

export default function Content({ state, id }: Props) {
  const [candidates, dispatch] = state;

  // Global state
  const { showDialog } = useDialog();

  // Components
  const Form = <FormParseLinks fetchScript={fetchService} id={id} dispatch={dispatch} />;

  // Safeguard
  if (candidates.length === 0) return <StateEmpty component={Form} />;

  return (
    <div className="candidates">
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
