// Node modules
import React from "react";
import ReactDOM from "react-dom/client";

// Project files
import App from "./App.tsx";
import "./styles/style.css";
import "./scripts/fontAwesome.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
