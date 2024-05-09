// Node modules
import { createContext, ReactNode, useContext, useRef, useState } from "react";

// Project files
import ContextProvider from "types/ContextProvider";

// Properties
interface ContextValue {
  dialog: ReactNode;
  dialogRef: React.RefObject<HTMLDialogElement> | null;
  showDialog: Function;
  closeDialog: Function;
}
const initialValue: ContextValue = {
  dialog: null,
  dialogRef: null,
  showDialog: () => {},
  closeDialog: () => {},
};
const Context = createContext(initialValue);

// For the parent
export function DialogProvider({ children }: ContextProvider) {
  // Local state
  const [dialog, setDialog] = useState<ReactNode>();
  const dialogRef = useRef<HTMLDialogElement>(null);

  // Methods
  function showDialog(reactNode: ReactNode) {
    setDialog(reactNode);
    dialogRef.current?.showModal();
  }

  function closeDialog() {
    setDialog(null);
    dialogRef.current?.close();
  }

  return (
    <Context.Provider value={{ dialog, dialogRef, showDialog, closeDialog }}>
      {children}
    </Context.Provider>
  );
}

// For the children
export default function useDialog() {
  const context = useContext(Context);

  return context;
}
