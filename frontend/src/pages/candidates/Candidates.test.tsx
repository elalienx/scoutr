// Node modules
import { describe, expect, test } from "vitest";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { fireEvent, render, screen } from "@testing-library/react";

// Project files
import Dialog from "components/dialog/Dialog";
import mockUseLoading from "scripts/fetch-hook/mocks/mockUseLoading";
import mockUseError from "scripts/fetch-hook/mocks/mockUseError";
import Candidates from "./Candidates";
import mockUseEmpty from "scripts/fetch-hook/mocks/mockUseEmpty";
import mockUseReadyCandidates from "scripts/fetch-hook/mocks/mockUseReadyCandidates";
import { DialogProvider } from "state/DialogContextAPI";

describe("Data fetching states", () => {
  test("Loading state", () => {
    // Arrange
    const mookHook = mockUseLoading;
    const page = <Candidates fetchHook={mookHook} />;
    const result = /loading/i;

    render(
      <MemoryRouter initialEntries={["/path/1"]}>
        <Routes>
          <Route path="/path/:assignment_id" element={page} />
        </Routes>
      </MemoryRouter>,
    );

    // Act
    const test = screen.queryByText(result);

    // Assert
    expect(test).toBeInTheDocument();
  });

  test("Error state", () => {
    // Arrange
    const mockHook = mockUseError;
    const page = <Candidates fetchHook={mockHook} />;
    const result = /The office WIFI strikes again/i;

    render(
      <MemoryRouter initialEntries={["/path/1"]}>
        <Routes>
          <Route path="/path/:assignment_id" element={page} />
        </Routes>
      </MemoryRouter>,
    );

    // Act
    const test = screen.queryByText(result);

    // Assert
    expect(test).toBeInTheDocument();
  });

  test("Empty state", () => {
    // Arrange
    const mockHook = mockUseEmpty;
    const page = <Candidates fetchHook={mockHook} />;
    const result = /Click below to start adding candidates./i;

    render(
      <MemoryRouter initialEntries={["/path/1"]}>
        <Routes>
          <Route path="/path/:assignment_id" element={page} />
        </Routes>
      </MemoryRouter>,
    );

    // Act
    const test = screen.queryByText(result);

    // Assert
    expect(test).toBeInTheDocument();
  });

  test("Ready (normal) state", () => {
    // Arrange
    const mockHook = mockUseReadyCandidates;
    const page = <Candidates fetchHook={mockHook} />;

    render(
      <MemoryRouter initialEntries={["/path/1"]}>
        <Routes>
          <Route path="/path/:assignment_id" element={page} />
        </Routes>
      </MemoryRouter>,
    );

    // Act
    const test1 = screen.queryByText("Eduardo Alvarez Nowak");
    const test2 = screen.queryByText("Sussana Vara");
    const test3 = screen.queryByText("Lana Haddad");

    // Assert
    expect(test1).toBeInTheDocument();
    expect(test2).toBeInTheDocument();
    expect(test3).toBeInTheDocument();
  });
});

test("Show parse links formulary from ready state", async () => {
  // Arrange
  const mockHook = mockUseReadyCandidates;
  const page = <Candidates fetchHook={mockHook} />;
  const result = "form-candidates";

  render(
    <DialogProvider>
      <MemoryRouter initialEntries={["/path/1"]}>
        <Routes>
          <Route path="/path/:assignment_id" element={page} />
        </Routes>
        <Dialog />
      </MemoryRouter>
    </DialogProvider>,
  );

  // Act
  const button = screen.getByRole("button", { name: /add candidates/i });

  fireEvent.click(button);

  // Assert
  expect(screen.getByTestId(result)).toBeInTheDocument();
});
