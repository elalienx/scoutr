// Node modules
import type { ReactNode } from "react";

// Project files
import Illustration from "assets/state-empty-candidates.avif";
import Button from "components/button/Button";
import useDialog from "state/DialogContextAPI";
import "styles/components/state-candidates.css";

interface Props {
  /** The React component to show when you click the button.  */
  component: ReactNode;
}
export default function StateEmpty({ component }: Props) {
  // Global state
  const { showDialog } = useDialog();

  return (
    <div className="state-candidates">
      <img src={Illustration} alt="3 people from different nationalities smiling at the camera" />
      <div className="content">
        <p>Welcome to a new Scoutr assignment.</p>
        <p>Click below to start adding candidates.</p>
      </div>
      <Button
        big
        icon_prefix="fab"
        icon="linkedin"
        label="Add candidates"
        onClick={() => showDialog(component)}
        primary
      />
    </div>
  );
}
