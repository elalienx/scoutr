// Node modules
import { IconName } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Project files
import Status from "types/Status";
import "styles/components/background-colors.css";
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
  let color = "gray";
  let icon: IconName | null = "plus";

  if (status === "error") {
    color = "red";
    icon = "circle-exclamation";
  }
  if (status === "loading") {
    color = "blue";
    icon = "spinner";
  }
  if (status === "ready") {
    color = "green";
    icon = "check";
  }
  if (status === "empty") {
    color = "invisible";
    icon = null;
  }

  return (
    <small data-testid="status" className={`form-status background-${color}`}>
      {icon && <FontAwesomeIcon className="icon" icon={["fas", icon]} spin={status === "loading"} />}
      {message}
    </small>
  );
}
