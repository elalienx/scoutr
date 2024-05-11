// Node modules
import { describe, expect, test } from "vitest";
import { Route } from "react-router-dom";

// Project files
import { fireEvent, render, screen } from "scripts/testing-library/candidates-page-globals";
import mockUseLoading from "scripts/fetch-hook/mocks/mockUseLoading";
import mockUseError from "scripts/fetch-hook/mocks/mockUseError";
import Candidates from "./Candidates";
import mockUseEmpty from "scripts/fetch-hook/mocks/mockUseEmpty";
import mockUseReadyCandidates from "scripts/fetch-hook/mocks/mockUseReadyCandidates";

describe("Data fetching states", () => {
  test("Loading state", () => {
    // Arrange
    const mookHook = mockUseLoading;
    const page = <Candidates fetchHook={mookHook} />;
    const result = /loading/i;

    render(<Route path="/path/:assignment_id" element={page} />);

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

    render(<Route path="/path/:assignment_id" element={page} />);

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

    render(<Route path="/path/:assignment_id" element={page} />);

    // Act
    const test = screen.queryByText(result);

    // Assert
    expect(test).toBeInTheDocument();
  });

  test("Ready (normal) state", () => {
    // Arrange
    const mockHook = mockUseReadyCandidates;
    const page = <Candidates fetchHook={mockHook} />;

    render(<Route path="/path/:assignment_id" element={page} />);

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

describe("Empty and Ready state open new assigment formulary", () => {
  test("Show parse links formulary from ready state", async () => {
    // Arrange
    const mockHook = mockUseReadyCandidates;
    const page = <Candidates fetchHook={mockHook} />;
    const result = "form-candidates";

    render(<Route path="/path/:assignment_id" element={page} />);

    // Act
    const button = screen.getByRole("button", { name: /add candidates/i });

    fireEvent.click(button);

    // Assert
    expect(screen.getByTestId(result)).toBeInTheDocument();
  });

  test("Show parse links formulary from empty state", async () => {
    // Arrange
    const mockHook = mockUseEmpty;
    const page = <Candidates fetchHook={mockHook} />;
    const result = "form-candidates";

    render(<Route path="/path/:assignment_id" element={page} />);

    // Act
    const button = screen.getByRole("button", { name: /add candidates/i });

    fireEvent.click(button);

    // Assert
    expect(screen.getByTestId(result)).toBeInTheDocument();
  });
});
