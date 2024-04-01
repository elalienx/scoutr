// Project files
import ErrorReport from "../../types/ErrorReport";
import ResultsAPI from "../../types/ResultsAPI";

export default function packageResults(candidateRows: unknown[], errorReports: ErrorReport[]): ResultsAPI {
  const severeReports = errorReports.filter((item) => item.error_severity > 0);
  const hasCandidates = candidateRows.length > 0;

  let status = 500;
  let data = [];
  let message: string | unknown[] = "Error parsing links";

  if (hasCandidates && severeReports.length > 0) {
    status = 200;
    data = candidateRows;
    message = severeReports;
  }

  if (hasCandidates && severeReports.length === 0) {
    status = 200;
    data = candidateRows;
    message = "All candidates parsed perfectly";
  }

  return {
    status,
    data,
    message,
  };
}
