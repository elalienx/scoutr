// Node modules
import React from "react";

// Project files
import "./src/styles/style.css";

export default function decorator({ children }) {
  return <div>{children}</div>;
}
