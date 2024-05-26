// Node modules
import { Link } from "react-router-dom";

// Project files
import Logo from "assets/logo-scoutr.svg";
import Assignment from "./helpers/Assignment";
import ResponseRate from "./helpers/ResponseRate";
import "./helpers/assignment.css";
import "./helpers/response-rate.css";
import "./navigation-bar.css";

interface Props {
  /** The name of the current assignment. */
  assignment_name: string;

  /** How many candidates have responded to us after initial contact? A value of -1 indicates we haven't started to contact anyone yet. */
  response_rate: number;
}

/** The menu bar for the Candidate page. */
export default function NavigationBar(item: Props) {
  const { assignment_name, response_rate } = item;

  return (
    <nav className="navigation-bar">
      {/* Left */}
      <Assignment assignment_name={assignment_name} />

      {/* Midle */}
      <Link to="/">
        <img className="scoutr-logo" src={Logo} alt="The word scouter withouth the letter R" />
      </Link>

      {/* Right */}
      {response_rate >= 0 && <ResponseRate response_rate={response_rate} />}
    </nav>
  );
}
