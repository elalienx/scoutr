// Node modules
import { describe, expect, test } from "vitest";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Project files
import { fireEvent, render, screen } from "scripts/testing-library-globals";
import useLoading from "mocks/useLoading";
import useError from "mocks/useError";
import useEmpty from "mocks/useEmpty";
import useReadyAssignments from "mocks/useReadyAssignments";
import Assignments from "./Assignments";
import Dialog from "components/dialog/Dialog";

describe("Data loading state", () => {
  test("Expect loading state", () => {
    // Arrange
    const mockHook = useLoading;
    render(<Assignments fetchHook={mockHook} />);

    // Act
    const test = screen.queryByText("loading...");

    // Assert
    // @ts-ignore
    expect(test).toBeInTheDocument();
  });

  test("Expect error state", () => {
    // Arrange
    const mockHook = useError;
    render(<Assignments fetchHook={mockHook} />);

    // Act
    const test = screen.queryByText("Oh no! We could not load any assigment.");

    // Assert
    // @ts-ignore
    expect(test).toBeInTheDocument();
  });

  test("Expect emtpy state", () => {
    // Arrange
    const mockHook = useEmpty;
    render(<Assignments fetchHook={mockHook} />);

    // Act
    const test = screen.queryByText(
      "Seems like you haven’t created any assigments yet."
    );

    // Assert
    // @ts-ignore
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
    // @ts-ignore
    expect(test1).toBeInTheDocument();
    // @ts-ignore
    expect(test2).toBeInTheDocument();
    // @ts-ignore
    expect(test3).toBeInTheDocument();
    // @ts-ignore
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
    // @ts-ignore
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
    // @ts-ignore
    expect(test()).toBeInTheDocument();
  });
});
