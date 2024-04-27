// Node modules
import { createContext, Dispatch, ReactNode } from "react";
import { useContext, useRef, useState } from "react";

// Project files
import ContextProvider from "types/ContextProvider";

// Properties
interface ContextValue {
  dialog: ReactNode | null;
  setDialog: Dispatch<any>;
  dialogRef: React.RefObject<HTMLDialogElement>;
}
const initialValue: ContextValue = {
  dialog: null,
  setDialog: () => {},
  dialogRef: useRef<HTMLDialogElement>(null),
};
const Context = createContext(initialValue);

// For the parent
export function DialogProvider({ children }: ContextProvider) {
  // Local state
  const [dialog, setDialog] = useState<ReactNode>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  // Properties
  const value = { dialog, setDialog, dialogRef };

  return <Context.Provider value={value}>{children}</Context.Provider>;
}

// For the children
export default function useDialog() {
  const context = useContext(Context);

  return context;
}
