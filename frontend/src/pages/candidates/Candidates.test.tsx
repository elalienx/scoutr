// Node modules
import { expect, test } from "vitest";
import Candidates from "./Candidates";
import mockUseLoading from "scripts/fetch-hook/mocks/mockUseLoading";
import { BrowserRouter, MemoryRouter, Route, Routes } from "react-router-dom";

import { render, screen } from "@testing-library/react";
import { DialogProvider } from "state/DialogContextAPI";

function FakePage() {
  return (
    <div>
      <h1>Candidates</h1>
    </div>
  );
}

test("Loading state", async () => {
  console.log("Loading!!!");

  render(<FakePage />);

  const test = screen.getByText(/candidates/i);

  expect(test).toBeInTheDocument();
});
