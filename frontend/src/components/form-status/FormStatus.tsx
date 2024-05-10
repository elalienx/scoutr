// Node modules
import { IconName } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Project files
import Status from "types/Status";
import "styles/components/colors.css";
import "./form-status.css";

interface Props {
  /** The status of the form submision. */
  status: Status;

  /** The message to display */
  message: string;
}

export default function FormStatus(item: Props) {
  const { status, message } = item;

  // Properties
  let colorCSS = "gray";
  let icon: IconName = "plus";

  if (status === "error") {
    colorCSS = "red";
    icon = "circle-exclamation";
  }
  if (status === "loading") {
    colorCSS = "blue";
    icon = "spinner";
  }
  if (status === "ready") {
    colorCSS = "green";
    icon = "check";
  }
  if (status === "empty") {
    colorCSS = "invisible";
  }

  return (
    <small data-testid="status" className={`form-status ${colorCSS}`}>
      <FontAwesomeIcon className="icon" icon={["fas", icon]} spin={status === "loading"} />
      {message}
    </small>
  );
}
