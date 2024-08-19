// Node modules
import React, { ReactElement } from "react";
import { BrowserRouter } from "react-router-dom";
import { render, RenderOptions } from "@testing-library/react";

// Project files
import { DialogProvider } from "state/DialogContextAPI";
import "styles/style.css";

// Properties
const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <DialogProvider>
      <BrowserRouter>{children}</BrowserRouter>
    </DialogProvider>
  );
};

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, "wrapper">) =>
  render(ui, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react";
export { customRender as render };
