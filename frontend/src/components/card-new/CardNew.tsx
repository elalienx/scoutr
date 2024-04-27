// Project files
import Button from "components/button/Button";
import ImageThumbnail from "components/image-thumbnail/ImageThumbnail";
import "components/card/card.css";
import "./card-new.css";
import useDialog from "state/DialogContextAPI";
import FormAssignment from "pages/assignments/helpers/FormAssignment";

/** UI element to create a new assignment. Does not have modificable properties. */
export default function CardNew() {
  // Global state
  const { setDialog, dialogRef } = useDialog();

  // Methods
  function onClick() {
    setDialog(<FormAssignment />);
    dialogRef.current?.showModal();
  }

  return (
    <article className="card card-new">
      <ImageThumbnail alt="A generic building" src={""} />
      <h2>Role name</h2>
      <small className="label">Company name</small>
      <Button
        icon="plus"
        label={"New assignment"}
        onClick={onClick}
        primary={true}
      />
    </article>
  );
}
