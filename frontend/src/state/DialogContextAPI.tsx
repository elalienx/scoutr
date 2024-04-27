// Node modules
import { createContext, ReactNode, useContext, useRef, useState } from "react";

// Project files
import ContextProvider from "types/ContextProvider";

// Properties
const Context = createContext(null);

// For the parent
export function DialogProvider({ children }: ContextProvider) {
  // Local state
  const [dialog, setDialog] = useState<ReactNode>();
  const dialogRef = useRef<HTMLDialogElement>(null);

  return (
    <Context.Provider value={{ dialog, setDialog, dialogRef }}>
      {children}
    </Context.Provider>
  );
}

// For the children
export default function useDialog() {
  const context = useContext(Context);

  return context;
}
