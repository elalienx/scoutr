// Node modules
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

// Project files
import App from "./App.tsx";
import { DialogProvider } from "state/DialogContextAPI.tsx";
import "styles/style.css";
import "scripts/fontAwesome.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <DialogProvider>
        <App />
      </DialogProvider>
    </BrowserRouter>
  </React.StrictMode>
);
