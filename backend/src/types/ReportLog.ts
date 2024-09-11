export default interface ReportLog {
  /** URL of the LinkedIn profile that triggered the error, facilitating later analysis. */
  url: string;

  /** Values taken from the ReportSeverity data type to represent the quality of the candidate data. */
  severity: number;

  /** Detailed error message provided by the subsystem that encountered the error. */
  message: string;
}
