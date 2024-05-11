// Node modules
import React, { ReactElement } from "react";
import { BrowserRouter } from "react-router-dom";
import { beforeAll, vi } from "vitest";
import { render, RenderOptions } from "@testing-library/react";

// Project files
import { DialogProvider } from "state/DialogContextAPI";
import "scripts/fontAwesome";
import "styles/style.css";

/**
 * Adds support the new HTML Dialog element as JSDom,
 * Testing Library's rendering engine,
 * doesn't support it natively.
 */
beforeAll(() => {
  HTMLDialogElement.prototype.show = vi.fn();
  HTMLDialogElement.prototype.showModal = vi.fn();
  HTMLDialogElement.prototype.close = vi.fn();
});

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
