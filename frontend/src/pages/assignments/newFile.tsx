import { expect, test } from "vitest";
import { getByText, render } from "@testing-library/react";
import Assignments from "./Assignments";

test("Shows loading while fetching data", () => {
  // Arrange
  render(<Assignments data={undefined} status={"loading"} />);

  // Act
  const test = getByText(/loading\.\.\./i); // using a regex to match case-insensitive

  // Assert
  expect(test).toBeInTheDocument();
});
