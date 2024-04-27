// Node modules
import { ReactNode, useRef } from "react";

interface Props {
  /** A React component to display inside the dialog. */
  children: ReactNode;
}

/** The native implementation of the popup window. It receivez any React JSX component. */
export default function Dialog({ children }: Props) {
  // Local state
  const dialogRef = useRef<HTMLDialogElement>(null);

  // dialogRef.showModal();

  return (
    <dialog className="dialog" ref={dialogRef}>
      {children}
    </dialog>
  );
}
