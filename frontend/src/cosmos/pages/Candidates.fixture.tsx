// Node modules
import { ReactNode } from "react";
import { MemoryRouter, Routes, Route } from "react-router-dom";

// Project files
import Candidates from "pages/candidates/Candidates";
import mockUseEmpty from "scripts/fetch-hook/mocks/mockUseEmpty";
import mockUseError from "scripts/fetch-hook/mocks/mockUseError";
import mockUseLoading from "scripts/fetch-hook/mocks/mockUseLoading";
import mockUseReadyCandidates from "scripts/fetch-hook/mocks/mockUseReadyCandidates";

// Decorators
function Wrapper({ element }: { element: ReactNode }) {
  return (
    <MemoryRouter initialEntries={["/path/1"]}>
      <Routes>
        <Route path="/path/:assignment_id" element={element} />
      </Routes>
    </MemoryRouter>
  );
}

/**
 * This page is wrapped in MagicRouter to simulate reading a variable
 * from the web browser URL address bar, which requires a Router context
 * to function correctly.
 */
export default {
  Default: <Wrapper element={<Candidates fetchHook={mockUseReadyCandidates} />} />,
  Loading: <Wrapper element={<Candidates fetchHook={mockUseLoading} />} />,
  Error: <Wrapper element={<Candidates fetchHook={mockUseError} />} />,
  Empty: <Wrapper element={<Candidates fetchHook={mockUseEmpty} />} />,
};
