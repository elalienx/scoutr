// Project files
import Button from "components/button/Button";
import ImageThumbnail from "components/image-thumbnail/ImageThumbnail";
import Assignment from "types/Assignment";
import "./card.css";
import { Link } from "react-router-dom";

/** UI element to visualize an assignment. */
export default function Card(item: Assignment) {
  const { id, assignment_name, company_name, company_image_url } = item;

  return (
    <Link to={`/candidates/${id}`}>
      <article className="card">
        <ImageThumbnail src={company_image_url} alt="The company logo" />
        <h2 className="trim-text">{assignment_name}</h2>
        <small className="label trim-text">{company_name}</small>
        <Button label={"Open"} primary={false} icon="folder-open" />
      </article>
    </Link>
  );
}
