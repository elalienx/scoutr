// Project files
import Image from "assets/state-empty-assignments.png";
import Button from "components/button/Button";
import useDialog from "state/DialogContextAPI";
import FormAssignment from "../form-assignment/FormAssignment";
import "styles/components/state.css";

export default function StateEmpty() {
  // Global state
  const { showDialog } = useDialog();

  // Components
  const ShowForm = () => showDialog(<FormAssignment />);

  return (
    <div className="state">
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
          onClick={ShowForm}
          primary={true}
        />
      </div>
    </div>
  );
}
