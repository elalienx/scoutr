const ReportSeverity = {
  /** Candidate data is complete. */
  NO_ERROR: 0,

  /** Some fields are missing but usable. */
  SOME_FIELDS_MISSING: 1,

  /** All fields are missing, data unusable. */
  ALL_FIELDS_MISSING: 2,
} as const;

export default ReportSeverity;
