// Node modules
import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Project files
import useMockLoading from "mocks/useMockLoading";
import useMockError from "mocks/useMockError";
import useMockEmpty from "mocks/useMockEmpty";
import useMockReadyAssignments from "mocks/useMockReadyAssignments";
import { DialogProvider } from "state/DialogContextAPI";
import Assignments from "./Assignments";

test("Expect loading state", () => {
  // Arrange
  const mockHook = useMockLoading;
  render(<Assignments fetchHook={mockHook} />);

  // Act
  const test = screen.queryByText("loading...");

  // Assert
  // @ts-ignore
  expect(test).toBeInTheDocument();
});

test("Expect error state", () => {
  // Arrange
  const mockHook = useMockError;
  render(<Assignments fetchHook={mockHook} />);

  // Act
  const test = screen.queryByText("Oh no! We could not load any assigment.");

  // Assert
  // @ts-ignore
  expect(test).toBeInTheDocument();
});

test("Expect emtpy state", () => {
  // Arrange
  const mockHook = useMockEmpty;
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
  const mockHook = useMockReadyAssignments;
  render(
    <DialogProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Assignments fetchHook={mockHook} />} />
        </Routes>
      </BrowserRouter>
    </DialogProvider>
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
