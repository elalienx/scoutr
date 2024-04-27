// Node modules
import { ReactNode } from "react";

interface Props {
  /** A React component to display inside the dialog. */
  children: ReactNode;
}

/** The native implementation of the popup window. It receivez any React JSX component. */
export default function Dialog({ children }: Props) {
  // Properties
  const isOpen = children === null;

  return (
    <dialog className="dialog" open={isOpen}>
      {children}
    </dialog>
  );
}
