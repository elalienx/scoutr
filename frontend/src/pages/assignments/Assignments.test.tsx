// Node modules
import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";

// Project files
import Assignments from "./Assignments";
import useFetchMock from "mocks/useFetchMock";

test("Expect loading state", () => {
  // Arrange
  const customHook = useFetchMock("www.loading.com");
  render(<Assignments hook={() => customHook} />);

  // Act
  const test = screen.queryByText("loading...");

  // Assert
  // @ts-ignore
  expect(test).toBeInTheDocument();
});

test("Expect error state", () => {
  // Arrange
  const customHook = useFetchMock("www.error.com");
  render(<Assignments hook={() => customHook} />);

  // Act
  const test = screen.queryByText("Oh no! We could not load any assigment.");

  // Assert
  // @ts-ignore
  expect(test).toBeInTheDocument();
});

test("Expect emtpy state", () => {
  // Arrange
  const customHook = useFetchMock("www.empty.com");
  render(<Assignments hook={() => customHook} />);

  // Act
  const test = screen.queryByText(
    "Seems like you haven’t created any assigments yet."
  );

  // Assert
  // @ts-ignore
  expect(test).toBeInTheDocument();
});

test("Expect content state", () => {
  // Arrange
  const customHook = useFetchMock("www.content.com/assignments");
  render(<Assignments hook={() => customHook} />);

  // Act
  const test1 = screen.queryByText("Data Engineer");
  const test2 = screen.queryByText("Developer Architect");
  const test3 = screen.queryByText("Master Data Specialist");
  const test4 = screen.queryByText("New assignment");

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
