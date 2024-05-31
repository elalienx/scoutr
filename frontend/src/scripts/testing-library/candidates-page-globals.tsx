// Node modules
import React, { ReactElement } from "react";
import { beforeAll, vi } from "vitest";
import { render, RenderOptions } from "@testing-library/react";

// Project files
import { DialogProvider } from "state/DialogContextAPI";
import "scripts/fontAwesome";
import "styles/style.css";
import Dialog from "components/dialog/Dialog";

/**
 * Adds support HTML dialog and JavaScript EventSource.
 *
 * HTML Dialog is added as JSDom,
 * Testing Library's rendering engine,
 * doesn't support it natively.
 *
 * EventSource is added as Node,
 * the JavaScript engine behind everything,
 * doesn't support it natively.
 */
beforeAll(() => {
  // Add HTML native dialog tag
  HTMLDialogElement.prototype.show = vi.fn();
  HTMLDialogElement.prototype.showModal = vi.fn();
  HTMLDialogElement.prototype.close = vi.fn();

  // Add JavaScript native Event Source class
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
