// Node modules
import { useEffect, useState, type Dispatch } from "react";

// Project files
import stringArrayToURL from "scripts/forms/stringArrayToURL";
import type CandidateActions from "types/CandidateActions";
import "./progress-worker.css";

interface Props {
  /** The ID of the assignment to parse. */
  id: number;

  /** The links to be serialized and sent to the backend. */
  links: string[];

  /** The script used for initializing the Server Side Event */
  FetchClass: any;

  /** A function that uses reducers to update the candidates state. */
  dispatch: Dispatch<CandidateActions>;
}

/** An UI element that manages the loading state the candidate scrapping using Server Side Events. */
export default function ProgressWorker({ id, links, FetchClass, dispatch }: Props) {
  // Local state
  const [scanned, setScanned] = useState(0);

  // Methods
  useEffect(() => {
    if (links.length > 0) onStart();
  }, [links]);

  function onStart() {
    console.log("onStart()");
    const query = stringArrayToURL(links);
    const uri = `/api/parse-links/${id}?${query}`;
    const eventSource = new EventSource(uri);

    eventSource.onmessage = (event) => updateEvent(event);
    eventSource.onerror = () => endEvent(eventSource);
  }

  function updateEvent(event: MessageEvent) {
    const data = JSON.parse(event.data);
    console.log("updateEvent() data", data);

    setScanned((previusState) => previusState + 1);
  }

  function endEvent(eventSource: EventSource) {
    eventSource.close();
  }

  return (
    <div data-testid="progress-worker" className="progress-worker">
      <div className="progress-numbers">
        <span className="big">{scanned}</span>/{links.length}
      </div>
      <h2>
        Scouting
        <br />
        candidates
      </h2>
    </div>
  );
}
