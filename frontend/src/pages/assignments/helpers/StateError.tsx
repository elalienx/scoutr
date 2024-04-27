// Project files
import Image from "assets/state-error.png";
import Button from "components/button/Button";
import "./state.css";

export default function StateError() {
  console.log("error ❌");

  return (
    <div className="state">
      <img
        src={Image}
        alt="A woman holding his hands behind the head looking surprised"
      />
      <div className="content">
        <p>Oh no! We could not load any assigment.</p>
        <p>Call Martin to fix your WIFI and try again!</p>
        <Button label="Try again" icon="rotate-right" primary={true} />
      </div>
    </div>
  );
}
