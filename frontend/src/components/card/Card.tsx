// Node modules
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Project files
import ImageThumbnail from "components/image-thumbnail/ImageThumbnail";
import Assignment from "types/Assignment";
import "./card.css";

/** UI element to visualize an assignment. */
export default function Card(item: Assignment) {
  const { id, assignment_name, company_name, company_image_url } = item;

  // Properties
  const link = `/candidates/${id}`;

  return (
    <article className="card">
      <ImageThumbnail src={company_image_url} alt="The company logo" />
      <h2 lang="en" className="trim-text">
        {assignment_name}
      </h2>
      <small className="label trim-text">{company_name}</small>
      <Link className="button small" to={link}>
        <FontAwesomeIcon className="icon" icon={["fas", "folder-open"]} />
        Open
      </Link>
    </article>
  );
}
