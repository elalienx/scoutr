// Node modules
import { beforeAll, describe, expect, test, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Project files
import useLoading from "mocks/useLoading";
import useError from "mocks/useError";
import useEmpty from "mocks/useEmpty";
import useReadyAssignments from "mocks/useReadyAssignments";
import Assignments from "./Assignments";
import useDialog, { DialogProvider } from "state/DialogContextAPI";

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
    render(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Assignments fetchHook={mockHook} />} />
        </Routes>
      </BrowserRouter>
    ); // you need the browser router as the cards have the Link to navigate between routes

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

function Dialog() {
  // Global state
  const { dialogRef, dialog } = useDialog();

  return <dialog ref={dialogRef}>{dialog}</dialog>;
}

beforeAll(() => {
  HTMLDialogElement.prototype.show = vi.fn();
  HTMLDialogElement.prototype.showModal = vi.fn();
  HTMLDialogElement.prototype.close = vi.fn();
});

describe("Empty and Ready state open new assigment formulary", () => {
  test("Show new assignment formulary from ready state", async () => {
    // Arrange
    const mockHook = useReadyAssignments;
    render(
      <DialogProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Assignments fetchHook={mockHook} />} />
          </Routes>
          <Dialog />
        </BrowserRouter>
      </DialogProvider>
    );

    // Act
    const button = screen.getByText(/new assignment/i);
    const test = () => screen.getByTestId("form-assignment");
    fireEvent.click(button);

    // Assert
    // @ts-ignore
    expect(test()).toBeInTheDocument();
  });

  test("Show new assignment formulary from empty state", async () => {
    // Arrange
    const mockHook = useEmpty;
    render(
      <DialogProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Assignments fetchHook={mockHook} />} />
          </Routes>
          <Dialog />
        </BrowserRouter>
      </DialogProvider>
    );

    // Act
    const button = screen.getByText(/new assignment/i);
    const test = () => screen.getByTestId("form-assignment");
    fireEvent.click(button);

    // Assert
    // @ts-ignore
    expect(test()).toBeInTheDocument();
  });
});
