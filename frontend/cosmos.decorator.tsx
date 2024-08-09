// Node modules
import { ReactNode } from "react";
import { BrowserRouter } from "react-router-dom";

// Project files
import "./src/scripts/fontAwesome";
import "./src/cosmos/cosmos-style.css";
import "./src/styles/style.css";

interface Props {
  children: ReactNode;
}

export default function decorator({ children }: Props) {
  return <div id="cosmos">{children}</div>;
}
