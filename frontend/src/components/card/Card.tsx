// Node modules
import { Link } from "react-router-dom";

// Project files
import FontAwesomeIcon from "components/font-awesome/FontAwesomeIcon";
import ImageThumbnail from "components/image-thumbnail/ImageThumbnail";
import type Assignment from "types/Assignment";
import "./card.css";

/** UI element to visualize an assignment. */
export default function Card(item: Assignment) {
  const { id, assignment_name, company_name, company_image_url } = item;

  // Properties
  const link = `/candidates/${id}`;

  return (
    <Link to={link} className="card">
      <ImageThumbnail src={company_image_url} alt="The company logo" />
      <h2 lang="en" className="trim-text">
        {assignment_name}
      </h2>
      <small className="label trim-text">{company_name}</small>
      <footer>
        <span className="link">View</span>
        <FontAwesomeIcon icon={["fas", "arrow-right"]} />
      </footer>
    </Link>
  );
}
