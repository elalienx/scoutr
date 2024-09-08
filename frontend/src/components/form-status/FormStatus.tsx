// Project files
import FontAwesomeIcon from "components/font-awesome/FontAwesomeIcon";
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
  let icon: string = "plus";

  // Color combinations
  // -- Normal forms
  if (status === "loading") {
    color = "blue";
    icon = "spinner";
  }

  if (status === "error") {
    color = "red";
    icon = "circle-exclamation";
  }

  if (status === "complete") {
    color = "blue";
    icon = "check";
  }

  // -- Parse links
  if (status === "sse-ok") {
    color = "green";
    icon = "user";
  }

  if (status === "sse-error") {
    color = "yellow";
    icon = "triangle-exclamation";
  }

  // safeguard
  const isVisible = color === "gray" && "invisible";

  return (
    <small data-testid="status" className={`form-status background-${color} ${isVisible}`}>
      <FontAwesomeIcon icon={["fas", icon]} spin={status === "loading"} />
      {message}
    </small>
  );
}
