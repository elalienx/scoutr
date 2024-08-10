// Node modules
import { MemoryRouter, Routes, Route } from "react-router-dom";

// Project files
import Candidates from "pages/candidates/Candidates";
import mockUseEmpty from "scripts/fetch-hook/mocks/mockUseEmpty";
import mockUseError from "scripts/fetch-hook/mocks/mockUseError";
import mockUseLoading from "scripts/fetch-hook/mocks/mockUseLoading";
import mockUseReadyCandidates from "scripts/fetch-hook/mocks/mockUseReadyCandidates";
import { ReactNode } from "react";

// Components
interface Props {
  element: ReactNode;
}

// Refactor as cosmos/MemoryRouterCandidates
function Wrapper({ element }: Props) {
  return (
    <MemoryRouter initialEntries={["/path/1"]}>
      <Routes>
        <Route path="/path/:assignment_id" element={element} />
      </Routes>
    </MemoryRouter>
  );
}

export default {
  Default: <Wrapper element={<Candidates fetchHook={mockUseReadyCandidates} />} />,
  Loading: <Wrapper element={<Candidates fetchHook={mockUseLoading} />} />,
  Error: <Wrapper element={<Candidates fetchHook={mockUseError} />} />,
  Empty: <Wrapper element={<Candidates fetchHook={mockUseEmpty} />} />,
};
