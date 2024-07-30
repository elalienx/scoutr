// Project files
import Illustration from "assets/state-error.avif";
import "styles/components/state-assignments.css";

export default function StateError() {
  return (
    <div className="state-assignments">
      <img src={Illustration} alt="A woman holding his hands behind the head looking surprised" />
      <div className="content">
        <p>Oh no! We could not load any assigment.</p>
        <p>Call Martin to fix your WIFI and try again!</p>
      </div>
    </div>
  );
}
