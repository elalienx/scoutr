// Project files
import Button from "components/button/Button";
import ImageThumbnail from "components/image-thumbnail/ImageThumbnail";
import FormAssignment from "pages/assignments/helpers/FormAssignment";
import useDialog from "state/DialogContextAPI";
import "components/card/card.css";
import "./card-new.css";

/** UI element to create a new assignment. Does not have modificable properties. */
export default function CardNew() {
  // Global state
  const { showDialog } = useDialog();

  // Components
  const ShowForm = () => showDialog(<FormAssignment />);

  return (
    <article className="card card-new">
      <ImageThumbnail alt="A generic building" src={""} />
      <h2>Role name</h2>
      <small className="label">Company name</small>
      <Button icon="plus" label="New assignment" onClick={ShowForm} primary />
    </article>
  );
}
