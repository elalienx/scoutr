// Project files
import FormStatus from "components/form-status/FormStatus";
import type ReportLog from "types/ReportLog";
import ReportSeverity from "types/ReportSeverity";
import "./mini-progress-worker.css";

interface Props {
  reports: ReportLog[];
}

export default function MiniProgressWorker({ reports }: Props) {
  const { SOME_FIELDS_MISSING: MISSING_SOME_FIELDS, ALL_FIELDS_MISSING: MISSING_ALL_FIELDS } =
    ReportSeverity;

  // Local state
  const normal: number = reports.filter((item) => item.severity <= MISSING_SOME_FIELDS).length;
  const error: number = reports.filter((item) => item.severity === MISSING_ALL_FIELDS).length;

  return (
    <div className="mini-progress-worker">
      <h3>Scanning report</h3>
      <div className="statuses">
        {normal > 0 && <FormStatus status={"added"} message={`Candidates added × ${normal}`} />}
        {error > 0 && <FormStatus status={"error"} message={`Failed to add × ${error}`} />}
      </div>
    </div>
  );
}
