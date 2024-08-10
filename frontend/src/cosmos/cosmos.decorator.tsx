// Node modules
import { ReactNode } from "react";

// Project files
import "styles/style.css"; // Scoutr global CSS including font styles, colors, spacing, etc.
import "./cosmos-style.css"; // To center tested components on screen

interface Props {
  children: ReactNode;
}

export default function decorator({ children }: Props) {
  return <div id="cosmos">{children}</div>;
}
