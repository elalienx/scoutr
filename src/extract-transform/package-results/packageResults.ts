// Project files
import ErrorReport from "../../types/ErrorReport";
import ResultsAPI from "../../types/ResultsAPI";

export default function packageResults(candidates: object[], errorReports: ErrorReport[]): ResultsAPI {
  const severeReports = errorReports.filter((item) => item.severity > 0);
  const hasCandidates = candidates.length > 0;

  let status = 500;
  let data = [];
  let message: string | unknown[] = "Error parsing links";

  if (hasCandidates && severeReports.length > 0) {
    status = 200;
    data = candidates;
    message = severeReports;
  }

  if (hasCandidates && severeReports.length === 0) {
    status = 200;
    data = candidates;
    message = "All candidates parsed perfectly";
  }

  return {
    status,
    data,
    message,
  };
}
