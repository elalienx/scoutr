// Node modules
import { createContext, useContext, useEffect, useRef, useState } from "react";
import type { ReactNode, RefObject } from "react";

// Project files
import type ContextProvider from "types/ContextProvider";

// Properties
interface ContextValue {
  reactComponent: ReactNode | null;
  dialogRef: RefObject<HTMLDialogElement> | null;
  showDialog: Function;
  closeDialog: Function;
}
const initialValue: ContextValue = {
  reactComponent: null,
  dialogRef: null,
  showDialog: () => {},
  closeDialog: () => {},
};
const Context = createContext(initialValue);

// For the parent
export function DialogProvider({ children }: ContextProvider) {
  // Local state
  const [reactComponent, setReactComponent] = useState<ReactNode>();
  const dialogRef = useRef<HTMLDialogElement>(null);

  // This make sure to listen any automatic close event like the ESC key.
  // Otherwise the next time you open a new dialog, you still see old one.
  useEffect(() => {
    dialogRef.current?.addEventListener("close", () => setReactComponent(null));
  }, []);

  // Methods
  function showDialog(reactNode: ReactNode) {
    dialogRef.current?.showModal();
    setReactComponent(reactNode);
  }

  function closeDialog() {
    dialogRef.current?.close();
    setReactComponent(null);
  }

  return (
    <Context.Provider value={{ reactComponent, dialogRef, showDialog, closeDialog }}>
      {children}
    </Context.Provider>
  );
}

// For the children
export default function useDialog() {
  const context = useContext(Context);

  return context;
}
