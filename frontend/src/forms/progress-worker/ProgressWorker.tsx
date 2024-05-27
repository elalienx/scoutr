// Node modules
import type { Dispatch } from "react";
import stringArrayToURL from "scripts/forms/stringArrayToURL";

// Project files
import type CandidateActions from "types/CandidateActions";

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

    // Note: If severity is 1, dispatch and raise the "warning" notification
    // Note: If severity is 3, NO dispatch and raise the "private profile" notification
    // Note: IF severity is 4, NO dispatch and raise the "temporailly_banned" notification
    if (report.severity < 2) dispatch({ type: "add-single", payload: candidate });
    else console.warn("Broken candidate", candidate, report);
  }

  async function endEvent(eventSource: EventSource) {
    eventSource.close();
  }

  return (
    <div className="progress-worker" data-testid="progress-worker">
      <h2>Scouting candidates</h2>
      <p>✅ Scanned: {0}</p>
      <hr />
      <div className="statuses">
        <p>🔁 Repeated: {0}</p>
        <p>🕵️ Private: {0}</p>
        <p>🚨 Errors: {0}</p>
      </div>
      <hr />
      <button onClick={() => onSubmit()}>This is a placeholder</button>
    </div>
  );
}
