// Node modules
import type { Dispatch } from "react";

// Project files
import type CandidateActions from "types/CandidateActions";

interface Props {
  /** The ID of the assignment to parse. */
  id: number;

  /** The links converted to a serialized string to read on the backend. */
  query: string;

  /** The script used for initializing the Server Side Event */
  sseScript: Function;

  /** A function that uses reducers to update the candidates state. */
  dispatch: Dispatch<CandidateActions>;
}

/** An UI element that manages the loading state the candidate scrapping using Server Side Events. */

export default function ProgressWorker({ id, query, sseScript, dispatch }: Props) {
  // Properties
  const uri = `/api/parse-links-sse/${id}?${query}`; // Refactor: Combine URI, Id, and Query and bring it from the parent

  // Methods
  function onSubmit() {
    const eventSource = new EventSource(`${uri}?${query}`);

    eventSource.onmessage = (event) => updateEvent(event);
    eventSource.onerror = () => endEvent(eventSource);
    console.log("this event source is replaced by sseScript for abstraction & testing", sseScript);
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
      <h2>Progress Worker 🛟</h2>
      <button onClick={() => onSubmit()}>This is a placeholder</button>
    </div>
  );
}
