// Mode modules
import { useNavigate } from "react-router-dom";

// Project files
import Illustration from "assets/state-error.png";
import Button from "components/button/Button";
import "styles/components/state-candidates.css";

export default function StateError() {
  // Global state
  const navigate = useNavigate();

  return (
    <div className="state-candidates">
      <img
        src={Illustration}
        alt="A woman holding his hands behind the head looking surprised"
      />
      <div className="content">
        <p>The office WIFI strikes again!</p>
        <p>You know the drill. Call Martin and try again.</p>
      </div>
      <Button
        label={"Go home"}
        icon="house-chimney"
        primary
        big
        onClick={() => navigate("/")}
      />
    </div>
  );
}
