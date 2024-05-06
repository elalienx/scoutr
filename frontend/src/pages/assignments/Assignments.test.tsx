// Node modules
import { describe, expect, test } from "vitest";
import { Route, Routes } from "react-router-dom";

// Project files
import Dialog from "components/dialog/Dialog";
import useLoading from "mocks/useLoading";
import useError from "mocks/useError";
import useEmpty from "mocks/useEmpty";
import useReadyAssignments from "mocks/useReadyAssignments";
import { fireEvent, render, screen } from "scripts/testing-library-globals";
import Assignments from "./Assignments";

describe("Data loading state", () => {
  test("Expect loading state", () => {
    // Arrange
    const mockHook = useLoading;
    const result = /loading.../i;
    render(<Assignments fetchHook={mockHook} />);

    // Act
    const test = screen.queryByText(result);

    // Assert
    expect(test).toBeInTheDocument();
  });

  test("Expect error state", () => {
    // Arrange
    const mockHook = useError;
    const result = /Oh no! We could not load any assigment./i;
    render(<Assignments fetchHook={mockHook} />);

    // Act
    const test = screen.queryByText(result);

    // Assert
    expect(test).toBeInTheDocument();
  });

  test("Expect emtpy state", () => {
    // Arrange
    const mockHook = useEmpty;
    const result = /Seems like you have not created any assigments yet./i;
    render(<Assignments fetchHook={mockHook} />);

    // Act
    const test = screen.queryByText(result);

    // Assert
    expect(test).toBeInTheDocument();
  });

  test("Expect ready state", () => {
    // Arrange
    const mockHook = useReadyAssignments;
    const assignments = <Assignments fetchHook={mockHook} />;
    render(
      <Routes>
        <Route path="/" element={assignments} />
      </Routes>
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
    const mockHook = useReadyAssignments;
    const assignments = <Assignments fetchHook={mockHook} />;
    render(
      <>
        <Routes>
          <Route path="/" element={assignments} />
        </Routes>
        <Dialog />
      </>
    );

    // Act
    const button = screen.getByRole("button", { name: /new assignment/i });
    const test = () => screen.getByTestId("form-assignment");
    fireEvent.click(button);

    // Assert
    expect(test()).toBeInTheDocument();
  });

  test("Show new assignment formulary from empty state", async () => {
    // Arrange
    const mockHook = useEmpty;
    const assignments = <Assignments fetchHook={mockHook} />;
    render(
      <>
        <Routes>
          <Route path="/" element={assignments} />
        </Routes>
        <Dialog />
      </>
    );

    // Act
    const button = screen.getByRole("button", { name: /new assignment/i });
    const test = () => screen.getByTestId("form-assignment");
    fireEvent.click(button);

    // Assert
    expect(test()).toBeInTheDocument();
  });
});
