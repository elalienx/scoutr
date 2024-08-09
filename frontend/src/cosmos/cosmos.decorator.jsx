// Node modules
import React from "react";

// Project files
import "./src/styles/style.css";

// Centering styles
const centeringStyles = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  boxSizing: "border-box",
};

export default function decorator({ children }) {
  return <div style={centeringStyles}>{children}</div>;
}
