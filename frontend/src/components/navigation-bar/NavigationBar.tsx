// Node modules
import { Link } from "react-router-dom";

// Project files
import Logo from "assets/logo-scoutr.svg";
import Assignment from "./helpers/Assignment";
import ResponseRate from "./helpers/ResponseRate";
import "./navigation-bar.css";

interface Props {
  /** The name of the current assignment. If left empty, it will say "Candidates". */
  assignment_name?: string;

  /** How many candidates have responded to us after initial contact? A value of -1 indicates we haven't started to contact anyone yet. */
  response_rate: number;
}

/** The menu bar for the Candidate page. */
export default function NavigationBar(item: Props) {
  const { assignment_name = "Candidates", response_rate } = item;

  // Properties
  const cssReponseRate = response_rate < 0 ? "invisible" : "";

  return (
    <nav className="navigation-bar">
      {/* Left */}
      <Assignment assignment_name={assignment_name} />

      {/* Middle */}
      <Link to="/">
        <img className="scoutr-logo" src={Logo} alt="The word scouter withouth the letter R" />
      </Link>

      {/* Right */}
      <ResponseRate response_rate={response_rate} cssClass={cssReponseRate} />
    </nav>
  );
}
