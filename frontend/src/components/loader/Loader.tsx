// Project files
import FontAwesomeIcon from "components/font-awesome/FontAwesomeIcon";
import "./loader.css";

/** Shows that we are waiting for server data. */
export default function Loader() {
  return (
    <div className="loader">
      <FontAwesomeIcon icon={["fas", "spinner"]} spin />
      <small className="text">Loading...</small>
    </div>
  );
}
