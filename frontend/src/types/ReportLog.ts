// Project file
import type ReportSeverity from "./ReportSeverity";

export default interface ReportLog {
  url: string;
  severity: ReportSeverity;
  message: string;
}
