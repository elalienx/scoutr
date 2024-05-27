// Node modules
import { useState, type Dispatch } from "react";

// Project files
import stringArrayToURL from "scripts/forms/stringArrayToURL";
import type CandidateActions from "types/CandidateActions";
import "./progress-worker.css";
import Button from "components/button/Button";

interface Props {
  /** The ID of the assignment to parse. */
  id: number;

  /** The links to be serialized and sent to the backend. */
  links: string[];

  /** The script used for initializing the Server Side Event */
  serverScript: Function;

  /** A function that uses reducers to update the candidates state. */
  dispatch: Dispatch<CandidateActions>;
}

/** An UI element that manages the loading state the candidate scrapping using Server Side Events. */

export default function ProgressWorker({ id, links, serverScript, dispatch }: Props) {
  // Local state
  const [scanned, setScanned] = useState(0);
  const [nonPublic, setNonPublic] = useState(0);
  const [failed, setFailed] = useState(0);

  // Properties
  const query = stringArrayToURL(links);
  const uri = `/api/parse-links-sse/${id}?${query}`;

  // Methods
  function onSubmit() {
    const eventSource = new EventSource(`${uri}?${query}`);
    console.log("replace EventSource with serverScript for abstraction & testing", serverScript);

    eventSource.onmessage = (event) => updateEvent(event);
    eventSource.onerror = () => endEvent(eventSource);
  }

  function updateEvent(event: MessageEvent) {
    const { candidate, report } = JSON.parse(event.data);

    if (report.severity < 2) dispatch({ type: "add-single", payload: candidate });
    if (report.severity === 2) setNonPublic((previousState) => previousState++);
    if (report.severity === 3) setFailed((previousState) => previousState++);

    setScanned((previousState) => previousState++);
  }

  async function endEvent(eventSource: EventSource) {
    eventSource.close();
  }

  return (
    <div className="progress-worker" data-testid="progress-worker">
      <div className="progress-numbers">
        <span className="big">{scanned}</span>/{links.length}
      </div>
      <h2>
        Scouting
        <br />
        candidates
      </h2>
      <div className="statuses">
        <p className="status">🕵️ Private profiles: {nonPublic}</p>
        <p className="status">🚨 Unable to scan: {failed}</p>
      </div>
      <Button onClick={() => onSubmit()} label={"Close"} icon="xmark" disabled={true} />
    </div>
  );
}
