// Node modules
import React, { ReactElement } from "react";
import { beforeAll, vi } from "vitest";
import { render, RenderOptions } from "@testing-library/react";

// Project files
import Dialog from "components/dialog/Dialog";
import { DialogProvider } from "state/DialogContextAPI";
import "styles/style.css";

/**
 * Adds support for EventSource as Node,
 * the JavaScript engine behind everything,
 * doesn't support it natively.
 */
beforeAll(() => {
  // @ts-ignore
  window.EventSource = vi.fn();
});

// Properties
/**
 * Note:
 * The reason that we only automatize the <DialogProvider/> and <Dialog/>
 * and not the <MemoryRouter/> and the <Routes/> is because there is a test
 * on Candidate pages about sending the wrong initialEntries to <MemoryRouter/>
 */
const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <DialogProvider>
      {children}
      <Dialog />
    </DialogProvider>
  );
};

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, "wrapper">) =>
  render(ui, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react";
export { customRender as render };
