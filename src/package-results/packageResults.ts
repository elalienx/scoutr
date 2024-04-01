// Project files
import ErrorReport from "../types/ErrorReport";
import ResultsAPI from "../types/ResultsAPI";

/**
 * Shall the good scenario go by default?
 * It's not the opossite?
 * The worst case scenario goes first, and only if we check, we say its good?
 */
export default function packageResults(candidateRows: unknown[], errorReports: ErrorReport[]): ResultsAPI {
  const severeReports = errorReports.filter((item) => item.error_severity > 0);
  let data = [];
  let message: string | unknown[] = "All candidates parsed perfectly";
  let status = 0;

  if (candidateRows.length === 0) {
    data = [];
    message = "Error parsing links";
    status = 500;
  }

  if (severeReports.length > 0) {
    data = candidateRows;
    message = errorReports;
    status = 200;
  }

  return {
    data: data,
    status: status,
    message: message,
  };
}
