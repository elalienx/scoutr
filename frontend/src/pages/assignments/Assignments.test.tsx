// Node modules
import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";

// Project files
import Assignments from "./Assignments";
import useFetchMock from "mocks/useFetchMock";

test("Expect loading to be in document", () => {
  // Arrange
  const customHook = useFetchMock("www.loading.com");
  render(<Assignments customHook={customHook} />);

  // Act
  const test = screen.queryByText("loading...");

  // Assert
  // @ts-ignore
  expect(test).toBeInTheDocument();
});
