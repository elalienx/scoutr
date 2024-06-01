// Project files
import type ReportLog from "types/ReportLog";
import "./mini-progress-worker.css";
import { useEffect, useState } from "react";
import FormStatus from "components/form-status/FormStatus";

export default function MiniProgressWorker(report: ReportLog) {
  // Local state
  const [ban, setBan] = useState(0);
  const [hidden, setHidden] = useState(0);
  const [other, setOther] = useState(0);

  // Properties
  const totalErrors = hidden + ban + other;

  // Methods
  useEffect(() => {
    if (report.severity === 2) setOther(other + 1);
    if (report.severity === 3) setHidden(hidden + 1);
    if (report.severity === 4) setBan(ban + 1);
  }, [report]);

  return (
    <div className="mini-progress-worker">
      {totalErrors > 0 && <h3>Scanning report</h3>}
      <div className="statuses">
        {hidden > 0 && <FormStatus status={"private"} message={`Private profile: ${hidden}`} />}
        {ban > 0 && <FormStatus status={"ban"} message={`Temporally unavailable: ${ban}`} />}
        {other > 0 && <FormStatus status={"error"} message={`Failed to scan: ${other}`} />}
      </div>
    </div>
  );
}
