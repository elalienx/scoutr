// Node modules
import { expect, test } from "vitest";
import Candidates from "./Candidates";
import mockUseLoading from "scripts/fetch-hook/mocks/mockUseLoading";
import { MemoryRouter, Route, Routes } from "react-router-dom";

import { render, screen } from "@testing-library/react";

test("Test", () => {
  const test = 2;
  const result = 4;

  expect(test + test).toBe(result);
});

test("Loading state", () => {
  // Arrange
  const candidates = <Candidates fetchHook={mockUseLoading} />;

  render(
    <MemoryRouter initialEntries={["/path/1"]}>
      <Routes>
        <Route path="/path/:assignment_id" element={candidates} />
      </Routes>
    </MemoryRouter>,
  );

  // Act
  console.log(screen.debug);
  // Assert
});
