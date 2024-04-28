// Node modules
import { useNavigate } from "react-router-dom";

// Project files
import Button from "components/button/Button";
import ImageThumbnail from "components/image-thumbnail/ImageThumbnail";
import Assignment from "types/Assignment";
import "./card.css";

/** UI element to visualize an assignment. */
export default function Card(item: Assignment) {
  const { id, assignment_name, company_name, company_image_url } = item;

  // Global state
  const navigate = useNavigate();

  return (
    <article className="card">
      <ImageThumbnail src={company_image_url} alt="The company logo" />
      <h2 className="trim-text">{assignment_name}</h2>
      <small className="label trim-text">{company_name}</small>
      <Button
        label={"Open"}
        primary={false}
        icon="folder-open"
        onClick={() => navigate(`/candidates/${id}`)}
      />
    </article>
  );
}
