// Node modules
import { describe, expect, test } from "vitest";
import { MemoryRouter, Route, Routes } from "react-router-dom";

// Project files
import mockUseEmpty from "scripts/mocks/mockUseEmpty";
import mockUseError from "scripts/mocks/mockUseError";
import mockUseLoading from "scripts/mocks/mockUseLoading";
import mockUseReadyCandidates from "scripts/mocks/mockUseReadyCandidates";
import { render, screen, fireEvent } from "scripts/testing-library/candidates-page-globals";
import Candidates from "./Candidates";

describe("Wrong assigment_id passed on the URL", () => {
  test("Not passing an assignment_id in the URL goes to the 404 page", () => {
    // Arrange
    const mockHook = mockUseError;
    const page = <Candidates fetchHook={mockHook} />;
    const page404 = <div>404 - Page not found</div>;
    const assignment_id = ""; // empty on purpose
    const result = /404 - Page not found/i;

    render(
      <MemoryRouter initialEntries={[`/path/${assignment_id}`]}>
        <Routes>
          <Route path="*" element={page404} />
          <Route path="/path/:assignment_id" element={page} />
        </Routes>
      </MemoryRouter>,
    );

    // Act
    const test = screen.queryByText(result);

    // Assert
    expect(test).toBeInTheDocument();
  });

  test("Passing a wrong value to assignment_id goes to the 404 page", () => {
    // Arrange
    const mockHook = mockUseError;
    const page = <Candidates fetchHook={mockHook} />;
    const page404 = <div>404 - Page not found</div>;
    const assignment_id = "hello"; // a word instead of number on purpose
    const result = /404 - Page not found/i;

    render(
      <MemoryRouter initialEntries={[`/path/${assignment_id}`]}>
        <Routes>
          <Route path="*" element={page404} />
          <Route path="/path/:assignment_id" element={page} />
        </Routes>
      </MemoryRouter>,
    );

    // Act
    const test = screen.queryByText(result);

    // Assert
    expect(test).toBeInTheDocument();
  });
});

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

describe("Empty and Ready state open the parse linnks formulary", () => {
  test("Show parse links formulary from ready state", async () => {
    // Arrange
    const mockHook = mockUseReadyCandidates;
    const page = <Candidates fetchHook={mockHook} />;
    const result = { text: "Add Candidates", type: { selector: "h2" } };

    render(
      <MemoryRouter initialEntries={["/path/1"]}>
        <Routes>
          <Route path="/path/:assignment_id" element={page} />
        </Routes>
      </MemoryRouter>,
    );

    // Act
    const button = screen.getByRole("button", { name: /add more candidates/i }); // note that this one says "more" as we know we have more than one in the table.

    fireEvent.click(button);

    // Assert
    expect(screen.getByText(result.text, result.type)).toBeInTheDocument();
  });

  test("Show parse links formulary from empty state", async () => {
    // Arrange
    const mockHook = mockUseEmpty;
    const page = <Candidates fetchHook={mockHook} />;
    const result = { text: "Add Candidates", type: { selector: "h2" } };

    render(
      <MemoryRouter initialEntries={["/path/1"]}>
        <Routes>
          <Route path="/path/:assignment_id" element={page} />
        </Routes>
      </MemoryRouter>,
    );

    // Act
    const button = screen.getByRole("button", { name: /add candidates/i });

    fireEvent.click(button);

    // Assert
    expect(screen.getByText(result.text, result.type)).toBeInTheDocument();
  });
});
