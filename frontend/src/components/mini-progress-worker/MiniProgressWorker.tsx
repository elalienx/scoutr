// Project files
import FormStatus from "components/form-status/FormStatus";
import type ReportLog from "types/ReportLog";
import ReportSeverity from "types/ReportSeverity";
import "./mini-progress-worker.css";

interface Props {
  reports: ReportLog[];
}

export default function MiniProgressWorker({ reports }: Props) {
  const { MISSING_SOME_FIELDS, TEMPORAL_BAN, MISSING_ALL_FIELDS, PRIVATE_PROFILE } = ReportSeverity;

  // Local state
  const normal: number = reports.filter((item) => item.severity <= MISSING_SOME_FIELDS).length;
  const hidden: number = reports.filter((item) => item.severity === PRIVATE_PROFILE).length;
  const banned: number = reports.filter((item) => item.severity === TEMPORAL_BAN).length;
  const other: number = reports.filter((item) => item.severity === MISSING_ALL_FIELDS).length;

  return (
    <div className="mini-progress-worker">
      <h3>Scanning report</h3>
      <div className="statuses">
        {normal > 0 && <FormStatus status={"added"} message={`Candidates added × ${normal}`} />}
        {hidden > 0 && <FormStatus status={"private"} message={`Private profiles × ${hidden}`} />}
        {banned > 0 && <FormStatus status={"ban"} message={`Temporally unavailable × ${banned}`} />}
        {other > 0 && <FormStatus status={"error"} message={`Failed to add × ${other}`} />}
      </div>
    </div>
  );
}
