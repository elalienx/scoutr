// Node modules
import { createContext, useContext, useRef, useState } from "react";
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
