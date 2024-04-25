// Project files
import Button from "components/button/Button";
import ImageThumbnail from "components/image-thumbnail/ImageThumbnail";
import "components/card/card.css";
import "./card-new.css";

/** UI element to create a new assignment. Does not have modificable properties. */
export default function CardNew() {
  return (
    <article className="card card-new">
      <ImageThumbnail src={""} alt="A generic building" />
      <h2>Role name</h2>
      <small className="label">Company name</small>
      <Button label={"New assignment"} primary={true} icon="plus" />
    </article>
  );
}
