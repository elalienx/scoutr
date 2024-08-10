// Project files
import MiniProgressWorker from "components/mini-progress-worker/MiniProgressWorker";
import ReportLog from "types/ReportLog";
import ReportSeverity from "types/ReportSeverity";

// Properties
const defaultReport: ReportLog[] = [
  {
    url: "http://www.nintendo.com",
    severity: ReportSeverity.NO_ERROR,
    message: "Private profile",
  },
];
const manyCandidatesReport: ReportLog[] = [
  {
    url: "http://www.nintendo.com",
    severity: ReportSeverity.NO_ERROR,
    message: "No errors",
  },
  {
    url: "http://www.sega.com",
    severity: ReportSeverity.NO_ERROR,
    message: "Missing: common sense to skip the 32x",
  },
  {
    url: "http://www.sony.com",
    severity: ReportSeverity.NO_ERROR,
    message: "No errors",
  },
];
const unknownErrorReport: ReportLog[] = [
  {
    url: "http://www.namco.com",
    severity: ReportSeverity.ALL_FIELDS_MISSING,
    message: "Missing all fields",
  },
];
const oneMessageOfEachKindReport: ReportLog[] = [
  {
    url: "http://www.nintendo.com",
    severity: ReportSeverity.NO_ERROR,
    message: "No errors",
  },
  {
    url: "http://www.namco.com",
    severity: ReportSeverity.ALL_FIELDS_MISSING,
    message: "Missing all fields",
  },
];

export default {
  Default: <MiniProgressWorker reports={defaultReport} />,
  "Many candidates": <MiniProgressWorker reports={manyCandidatesReport} />,
  "Unknown error": <MiniProgressWorker reports={unknownErrorReport} />,
  "One message of each kind": <MiniProgressWorker reports={oneMessageOfEachKindReport} />,
};
