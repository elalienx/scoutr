// Node modules
import { ReactNode } from "react";
// Project files

import Image from "assets/state-empty-assignments.png";
import Button from "components/button/Button";
import useDialog from "state/DialogContextAPI";
import "styles/components/state-assignments.css";

interface Props {
  /** The React component to show when you click primary button.  */
  component: ReactNode;
}

export default function StateEmpty({ component }: Props) {
  // Global state
  const { showDialog } = useDialog();

  return (
    <div className="state-assignments">
      <img
        src={Image}
        alt="A male a female construction engineers checking a blueprint"
      />
      <div className="content">
        <p>Seems like you haven’t created any assigments yet.</p>
        <p>Click the button below to start!</p>
        <Button
          icon="plus"
          label="New assignment"
          onClick={() => showDialog(component)}
          primary
        />
      </div>
    </div>
  );
}