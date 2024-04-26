// Node modules
import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";

// Project files
import App from "./App";

test("Expect test to be in document", () => {
  render(<App />);

  const test = screen.queryByText("Vite + React");

  expect(test).toBeInTheDocument();
});
