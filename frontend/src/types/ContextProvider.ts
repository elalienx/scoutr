// Node modules
import type { ReactNode } from "react";

export default interface ContextProvider {
  /** The React components rendered with access to the context provider */
  children: ReactNode;
}
