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

  /** The company logo. */
  company_image_url: string;

  /** How many candidates have responded to us after initial contact? A value of -1 indicates we haven't started to contact anyone yet. */
  response_rate: number;
}

/** The menu bar for the Candidate page. */
export default function NavigationBar(item: Props) {
  const { assignment_name, company_image_url, response_rate } = item;

  return (
    <nav className="navigation-bar">
      {/* Left */}
      <Assignment
        assignment_name={assignment_name}
        company_image_url={company_image_url}
      />

      {/* Midle */}
      <img className="scoutr-logo" src={Logo} />

      {/* Right */}
      {response_rate >= 0 && <ResponseRate response_rate={response_rate} />}
    </nav>
  );
}
