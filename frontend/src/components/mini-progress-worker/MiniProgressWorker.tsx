// Node modules
import { useEffect, useState } from "react";

// Project files
import FormStatus from "components/form-status/FormStatus";
import type ReportLog from "types/ReportLog";
import ReportSeverity from "types/ReportSeverity";
import "./mini-progress-worker.css";

export default function MiniProgressWorker(report: ReportLog) {
  const { MISSING_SOME_FIELDS, TEMPORAL_BAN, MISSING_ALL_FIELDS, PRIVATE_PROFILE } = ReportSeverity;

  // Local state
  const [normal, setNormal] = useState(0);
  const [ban, setBan] = useState(0);
  const [hidden, setHidden] = useState(0);
  const [other, setOther] = useState(0);

  // Methods
  useEffect(() => {
    console.log(report);
    if (report.severity <= MISSING_SOME_FIELDS) setNormal((prev) => prev + 1);
    if (report.severity === TEMPORAL_BAN) setBan((prev) => prev + 1);
    if (report.severity === PRIVATE_PROFILE) setHidden((prev) => prev + 1);
    if (report.severity === MISSING_ALL_FIELDS) setOther((prev) => prev + 1);
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
