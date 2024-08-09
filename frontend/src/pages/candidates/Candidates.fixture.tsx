// Project files
import mockUseEmpty from "scripts/fetch-hook/mocks/mockUseEmpty";
import mockUseError from "scripts/fetch-hook/mocks/mockUseError";
import mockUseLoading from "scripts/fetch-hook/mocks/mockUseLoading";
import mockUseReadyCandidates from "scripts/fetch-hook/mocks/mockUseReadyCandidates";
import Candidates from "./Candidates";

export default {
  Default: <Candidates fetchHook={mockUseReadyCandidates} />,
  Loading: <Candidates fetchHook={mockUseLoading} />,
  Error: <Candidates fetchHook={mockUseError} />,
  Empty: <Candidates fetchHook={mockUseEmpty} />,
};
