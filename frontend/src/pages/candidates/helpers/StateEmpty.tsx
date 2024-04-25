// Project files
import Image from "assets/state-empty-candidates.png";
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
        <p>Welcome to a new Scoutr assignment.</p>
        <p>Click below to start adding candidates.</p>
      </div>
      <Button
        label="New assignment"
        icon_prefix="fab"
        icon="linkedin"
        primary={true}
        size="big"
      />
    </div>
  );
}
