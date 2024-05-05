// Project files
import useDialog from "state/DialogContextAPI";
import "./dialog.css";

/**
 * The native HTML element for top screen popups, which doesn't directly accept parameters.
 * It is managed by a React custom hook called useDialog().
 */
export default function Dialog() {
  // Global state
  const { dialogRef, dialog } = useDialog();

  return (
    <dialog className="dialog" ref={dialogRef}>
      {dialog}
    </dialog>
  );
}
