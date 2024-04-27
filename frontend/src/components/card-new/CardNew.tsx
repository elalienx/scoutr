// Project files
import Button from "components/button/Button";
import ImageThumbnail from "components/image-thumbnail/ImageThumbnail";
import "components/card/card.css";
import "./card-new.css";
import { useSearchParams } from "react-router-dom";

/** UI element to create a new assignment. Does not have modificable properties. */
export default function CardNew() {
  // Global state
  const [parameters, setParameters] = useSearchParams({ dialog: "" });

  // Methods
  function onOpenForm() {
    setParameters((value) => {
      value.set("dialog", "form-new-assignment");
      return value;
    });
  }

  return (
    <article className="card card-new">
      <ImageThumbnail alt="A generic building" src={""} />
      <h2>Role name</h2>
      <small className="label">Company name</small>
      <Button
        icon="plus"
        label={"New assignment"}
        onClick={onOpenForm}
        primary={true}
      />
    </article>
  );
}
