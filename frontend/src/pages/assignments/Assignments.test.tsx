// Node modules
import { describe, expect, test } from "vitest";
import { Route, Routes } from "react-router-dom";

// Project files
import Dialog from "components/dialog/Dialog";
import mockUseLoading from "scripts/fetch-hook/mocks/mockUseLoading";
import mockUseError from "scripts/fetch-hook/mocks/mockUseError";
import mockUseEmpty from "scripts/fetch-hook/mocks/mockUseEmpty";
import mockUseReadyAssignments from "scripts/fetch-hook/mocks/mockUseReadyAssignments";
import { fireEvent, render, screen } from "scripts/testing-library-globals";
import Assignments from "./Assignments";

describe("Data fetching states", () => {
  test("Loading state", () => {
    // Arrange
    const mockHook = mockUseLoading;
    const result = /loading.../i;

    render(<Assignments fetchHook={mockHook} />);

    // Act
    const test = screen.queryByText(result);

    // Assert
    expect(test).toBeInTheDocument();
  });

  test("Error state", () => {
    // Arrange
    const mockHook = mockUseError;
    const result = /Oh no! We could not load any assigment./i;

    render(<Assignments fetchHook={mockHook} />);

    // Act
    const test = screen.queryByText(result);

    // Assert
    expect(test).toBeInTheDocument();
  });

  test("Emtpy state", () => {
    // Arrange
    const mockHook = mockUseEmpty;
    const result = /Seems like you have not created any assigments yet./i;

    render(<Assignments fetchHook={mockHook} />);

    // Act
    const test = screen.queryByText(result);

    // Assert
    expect(test).toBeInTheDocument();
  });

  test("Ready (normal) state", () => {
    // Arrange
    const mockHook = mockUseReadyAssignments;
    const assignments = <Assignments fetchHook={mockHook} />;

    render(
      <Routes>
        <Route path="/" element={assignments} />
      </Routes>,
    );

    // Act
    const test1 = screen.queryByText("Data Engineer");
    const test2 = screen.queryByText("Folksam");
    const test3 = screen.queryByText("Master Data Specialist");
    const test4 = screen.queryByText("McDonalds");

    // Assert
    expect(test1).toBeInTheDocument();
    expect(test2).toBeInTheDocument();
    expect(test3).toBeInTheDocument();
    expect(test4).toBeInTheDocument();
  });
});

describe("Empty and Ready state open new assigment formulary", () => {
  test("Show new assignment formulary from ready state", async () => {
    // Arrange
    const mockHook = mockUseReadyAssignments;
    const assignments = <Assignments fetchHook={mockHook} />;
    const result = "form-assignment";

    render(
      <>
        <Routes>
          <Route path="/" element={assignments} />
        </Routes>
        <Dialog />
      </>,
    );

    // Act
    const button = screen.getByRole("button", { name: /new assignment/i });

    fireEvent.click(button);

    // Assert
    expect(screen.getByTestId(result)).toBeInTheDocument();
  });

  test("Show new assignment formulary from empty state", async () => {
    // Arrange
    const mockHook = mockUseEmpty;
    const assignments = <Assignments fetchHook={mockHook} />;
    const result = "form-assignment";

    render(
      <>
        <Routes>
          <Route path="/" element={assignments} />
        </Routes>
        <Dialog />
      </>,
    );

    // Act
    const button = screen.getByRole("button", { name: /new assignment/i });

    fireEvent.click(button);

    // Assert
    expect(screen.getByTestId(result)).toBeInTheDocument();
  });
});
