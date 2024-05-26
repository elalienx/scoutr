// Node modules
import type { Dispatch } from "react";

// Project files
import CandidateActions from "types/CandidateActions";

interface Props {
  /** The ID of the assignment to parse. */
  id: number;

  /** The script used for initializing the Server Side Event */
  sseScript: Function;

  /** A function that uses reducers to update the candidates state. */
  dispatch: Dispatch<CandidateActions>;
}

export default function ProgressWorker({ id, sseScript, dispatch }: Props) {
  // Properties
  const uri = `/api/parse-links-sse/${id}`;
  const query = ""; // this must come from FormParseLinks
  console.log("this event source is replaced by sseScript for abstraction & testing", sseScript);

  // Methods
  function onSubmit() {
    // this event source is replaced by sseScript for abstraction & testing
    const eventSource = new EventSource(`${uri}?${query}`);

    eventSource.onmessage = (event) => updateEvent(event);
    eventSource.onerror = () => endEvent(eventSource);
  }

  function updateEvent(event: MessageEvent) {
    const { candidate, report } = JSON.parse(event.data);

    if (report.severity < 2) {
      dispatch({ type: "add-single", payload: candidate });
    } else {
      console.warn("Broken candidate", candidate, report);
    }
  }

  async function endEvent(eventSource: EventSource) {
    eventSource.close();
  }

  return (
    <div className="progress-worker" data-testid="progress-worker">
      <button onClick={() => onSubmit}>This is a placeholder</button>
    </div>
  );
}
