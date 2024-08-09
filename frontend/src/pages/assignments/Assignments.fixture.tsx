// Project files
import mockUseEmpty from "scripts/fetch-hook/mocks/mockUseEmpty";
import mockUseError from "scripts/fetch-hook/mocks/mockUseError";
import mockUseLoading from "scripts/fetch-hook/mocks/mockUseLoading";
import mockUseReadyAssignments from "scripts/fetch-hook/mocks/mockUseReadyAssignments";
import Assignments from "./Assignments";

export default {
  Default: <Assignments fetchHook={mockUseReadyAssignments} />,
  Loading: <Assignments fetchHook={mockUseLoading} />,
  Error: <Assignments fetchHook={mockUseError} />,
  Empty: <Assignments fetchHook={mockUseEmpty} />,
};
