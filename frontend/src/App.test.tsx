import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";

import App from "App";
import { JSDOM } from "jsdom";

const dom = new JSDOM("<!DOCTYPE html><html><body></body></html>");
(global as any).document = dom.window.document;
(global as any).window = dom.window;
test("Hello", () => {
  render(<App />);

  const test = screen.getByText("Hello");

  expect(test).toBeInTheDocument();
});
