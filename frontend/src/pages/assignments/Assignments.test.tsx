// Node modules
import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";

// Project files
import Assignments from "./Assignments";

test("Expect loading to be in document", () => {
  render(<Assignments data={undefined} status={"empty"} />);

  const test = screen.queryByText("Vite + React");

  // @ts-ignore
  expect(test).toBeInTheDocument();
});
