// Project files
import Image from "assets/state-error.png";
import Button from "components/button/Button";
import "styles/components/state-candidates.css";

export default function StateError() {
  return (
    <div className="state-candidates">
      <img
        src={Image}
        alt="A woman holding his hands behind the head looking surprised"
      />
      <div className="content">
        <p>The office WIFI strikes again!</p>
        <p>You know the drill. Call Martin and try again.</p>
      </div>
      <Button label="Try again" icon="rotate-right" size="big" primary={true} />
    </div>
  );
}
