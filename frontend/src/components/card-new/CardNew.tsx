// Node modules
import { ReactNode } from "react";

// Project files
import Button from "components/button/Button";
import ImageThumbnail from "components/image-thumbnail/ImageThumbnail";
import useDialog from "state/DialogContextAPI";
import "components/card/card.css";
import "./card-new.css";

interface Props {
  /** The React component to show when you click primary button.  */
  component: ReactNode;
}

/** UI element to create a new assignment. Does not have modificable properties. */
export default function CardNew({ component }: Props) {
  // Global state
  const { showDialog } = useDialog();

  return (
    <article className="card card-new">
      <ImageThumbnail alt="A generic building" src={""} />
      <h2>Role name</h2>
      <small className="label">Company name</small>
      <Button icon="plus" label="New assignment" onClick={() => showDialog(component)} primary />
    </article>
  );
}
