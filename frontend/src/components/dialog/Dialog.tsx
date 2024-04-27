// Project files
import useDialog from "state/DialogContextAPI";

export default function Dialog() {
  // Global state
  const { dialogRef, dialog } = useDialog();

  return <dialog ref={dialogRef}>{dialog}</dialog>;
}
