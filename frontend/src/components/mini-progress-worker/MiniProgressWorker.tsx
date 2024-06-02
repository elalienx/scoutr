// Project files
import type ReportLog from "types/ReportLog";
import "./mini-progress-worker.css";
import { useEffect, useState } from "react";
import FormStatus from "components/form-status/FormStatus";
import ReportSeverity from "types/ReportSeverity";

interface Props {
  report: ReportLog | null;
}

export default function MiniProgressWorker({ report }: Props) {
  // Safeguard
  if (report === null) return;

  const { NO_ERROR, TEMPORAL_BAN, MISSING_ALL_FIELDS, PRIVATE_PROFILE } = ReportSeverity;
  const { severity } = report;

  // Local state
  const [normal, setNormal] = useState(0);
  const [ban, setBan] = useState(0);
  const [hidden, setHidden] = useState(0);
  const [other, setOther] = useState(0);

  // Methods
  useEffect(() => {
    if (severity === NO_ERROR) setNormal(normal + 1);
    if (severity === MISSING_ALL_FIELDS) setOther(other + 1);
    if (severity === PRIVATE_PROFILE) setHidden(hidden + 1);
    if (severity === TEMPORAL_BAN) setBan(ban + 1);
  }, [report]);

  return (
    <div className="mini-progress-worker">
      <h3>Scanning report</h3>
      <div className="statuses">
        {normal > 0 && <FormStatus status={"added"} message={`Candidates added × ${normal}`} />}
        {hidden > 0 && <FormStatus status={"private"} message={`Private profiles × ${hidden}`} />}
        {ban > 0 && <FormStatus status={"ban"} message={`Temporally unavailable × ${ban}`} />}
        {other > 0 && <FormStatus status={"error"} message={`Failed to add × ${other}`} />}
      </div>
    </div>
  );
}
