// Node modules
import { ReactNode } from "react";
import { MemoryRouter, Routes, Route } from "react-router-dom";

// Project files
import Candidates from "pages/candidates/Candidates";
import mockUseEmpty from "scripts/mocks/mockUseEmpty";
import mockUseError from "scripts/mocks/mockUseError";
import mockUseLoading from "scripts/mocks/mockUseLoading";
import mockUseReadyCandidates from "scripts/mocks/mockUseReadyCandidates";

// Decorators
function DecoratorRouter({ element }: { element: ReactNode }) {
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
  Default: <DecoratorRouter element={<Candidates fetchHook={mockUseReadyCandidates} />} />,
  Loading: <DecoratorRouter element={<Candidates fetchHook={mockUseLoading} />} />,
  Error: <DecoratorRouter element={<Candidates fetchHook={mockUseError} />} />,
  Empty: <DecoratorRouter element={<Candidates fetchHook={mockUseEmpty} />} />,
};
