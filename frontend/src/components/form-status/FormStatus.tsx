// Node modules
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconName } from "@fortawesome/fontawesome-svg-core";

// Project files
import type StatusForm from "types/StatusForm";
import type Color from "types/Color";
import "styles/components/background-colors.css";
import "./form-status.css";

interface Props {
  /** The status of the form submision. */
  status: StatusForm;

  /** The message to display */
  message: string;
}

export default function FormStatus(item: Props) {
  const { status, message } = item;

  // Properties
  let color: Color = "gray";
  let icon: IconName = "plus";

  if (status === "loading") {
    color = "blue";
    icon = "spinner";
  }
  if (status === "error") {
    color = "red";
    icon = "circle-exclamation";
  }
  if (status === "complete") {
    color = "green";
    icon = "check";
  }
  if (status === "private") {
    color = "yellow";
    icon = "user-secret";
  }
  if (status === "ban") {
    color = "orange";
    icon = "ban";
  }

  // safeguard
  const isVisible = color === "gray" && "invisible";

  return (
    <small data-testid="status" className={`form-status background-${color} ${isVisible}`}>
      <FontAwesomeIcon className="icon" icon={["fas", icon]} spin={status === "loading"} />
      {message}
    </small>
  );
}
