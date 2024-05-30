// Node modules
import type { Dispatch } from "react";

// Project files
import Button from "components/button/Button";
import FormParseLinks from "forms/parse-links/FormParseLinks";
import useDialog from "state/DialogContextAPI";
import type Candidate from "types/Candidate";
import type CandidateActions from "types/CandidateActions";
import StateEmpty from "../state-empty/StateEmpty";
import Table from "../table/Table";

interface Props {
  /** The id of the current assigment. */
  id: number;

  /** The candidates to dispaly on the table. */
  state: [Candidate[], Dispatch<CandidateActions>];
}

export default function Content({ state }: Props) {
  const [candidates] = state;

  // Global state
  const { showDialog } = useDialog();

  // Components
  const Form = <FormParseLinks id={id} />;

  // Safeguard
  if (!candidates.length) return <StateEmpty component={Form} />;

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
