// Node modules
import { BrowserRouter } from "react-router-dom";

// Project files
import Assignments from "pages/assignments/Assignments";
import mockUseEmpty from "scripts/fetch-hook/mocks/mockUseEmpty";
import mockUseError from "scripts/fetch-hook/mocks/mockUseError";
import mockUseLoading from "scripts/fetch-hook/mocks/mockUseLoading";
import mockUseReadyAssignments from "scripts/fetch-hook/mocks/mockUseReadyAssignments";

/**
 * This page is wrapped in BrowserRouter to support routing
 * as it includes a Link component, which requires a Router context
 * to function correctly.
 */
export default {
  Default: (
    <BrowserRouter>
      <Assignments fetchHook={mockUseReadyAssignments} />
    </BrowserRouter>
  ),
  Loading: (
    <BrowserRouter>
      <Assignments fetchHook={mockUseLoading} />
    </BrowserRouter>
  ),
  Error: (
    <BrowserRouter>
      <Assignments fetchHook={mockUseError} />
    </BrowserRouter>
  ),
  Empty: (
    <BrowserRouter>
      <Assignments fetchHook={mockUseEmpty} />
    </BrowserRouter>
  ),
};
