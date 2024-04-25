// Node modules
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Project files
import "./loader.css";

/** Shows that we are awaiting data from the server. */
export default function Loader() {
  return (
    <div className="loader">
      <FontAwesomeIcon className="icon" icon={["fas", "spinner"]} spin />
      <small className="text">loading...</small>
    </div>
  );
}
