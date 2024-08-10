// Project files
import MiniProgressWorker from "components/mini-progress-worker/MiniProgressWorker";
import type ReportLog from "types/ReportLog";
import ReportSeverity from "types/ReportSeverity";

// Properties
const normal: ReportLog[] = [
  {
    url: "http://www.nintendo.com",
    severity: ReportSeverity.NO_ERROR,
    message: "Private profile",
  },
];
const manyCandidates: ReportLog[] = [
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
const unknownError: ReportLog[] = [
  {
    url: "http://www.namco.com",
    severity: ReportSeverity.ALL_FIELDS_MISSING,
    message: "Missing all fields",
  },
];
const oneMessageOfEachKind: ReportLog[] = [
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
  Default: <MiniProgressWorker reports={normal} />,
  "Many candidates": <MiniProgressWorker reports={manyCandidates} />,
  "Unknown error": <MiniProgressWorker reports={unknownError} />,
  "One message of each kind": <MiniProgressWorker reports={oneMessageOfEachKind} />,
};
