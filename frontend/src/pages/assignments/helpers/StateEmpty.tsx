// Project files
import Image from "assets/state-empty-assignments.png";
import Button from "components/button/Button";
import "./state.css";

export default function StateEmpty() {
  return (
    <div className="state">
      <img
        src={Image}
        alt="A male a female construction engineers checking a blueprint"
      />
      <div className="content">
        <p>Seems like you haven’t created any assigments yet.</p>
        <p>Click the button below to start!</p>
        <Button label="New assignment" icon="plus" primary={true} />
      </div>
    </div>
  );
}
