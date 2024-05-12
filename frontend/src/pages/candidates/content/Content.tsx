// Node modules
import { ReactNode } from "react";

// Project files
import Candidate from "types/Candidate";
import Table from "../table/Table";
import Button from "components/button/Button";
import useDialog from "state/DialogContextAPI";

interface Props {
  /** The candidates to dispaly on the table. */
  candidates: Candidate[];

  /** The React component to show when you click the button.  */
  component: ReactNode;
}

export default function Content({ candidates, component }: Props) {
  // Global state
  const { showDialog } = useDialog();

  // Properties
  const sortedById = candidates.sort((a, b) => a.id - b.id);

  return (
    <>
      <Table candidates={sortedById}></Table>
      <Button
        big
        icon_prefix="fab"
        icon="linkedin"
        label={"Add more candidates"}
        onClick={() => showDialog(component)}
        primary
      />
    </>
  );
}
