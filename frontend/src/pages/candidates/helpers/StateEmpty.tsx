// Project files
import Image from "assets/state-empty-candidates.png";
import Button from "components/button/Button";
import useDialog from "state/DialogContextAPI";
import FormCandidates from "./FormCandidates";
import "./state.css";

export default function StateEmpty() {
  // Global state
  const { showDialog } = useDialog();

  // Components
  const ShowForm = () => showDialog(<FormCandidates />);

  return (
    <div className="state">
      <img
        src={Image}
        alt="A male a female construction engineers checking a blueprint"
      />
      <div className="content">
        <p>Welcome to a new Scoutr assignment.</p>
        <p>Click below to start adding candidates.</p>
      </div>
      <Button
        icon_prefix="fab"
        icon="linkedin"
        label="New assignment"
        onClick={ShowForm}
        primary={true}
        size="big"
      />
    </div>
  );
}
