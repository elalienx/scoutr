// Node modules
import { useState } from "react";
import type { Dispatch, FormEvent } from "react";

// Project files
import Button from "components/button/Button";
import InputFields from "components/input-fields/InputFields";
import FormStatus from "components/form-status/FormStatus";
import gatherFormData from "scripts/forms/gatherFormData";
import textAreaToArray from "scripts/forms/textAreaToArray";
import waitForSeconds from "scripts/waitForSeconds";
import useDialog from "state/DialogContextAPI";
import type FetchOptions from "types/FetchOptions";
import type ResultsAPI from "types/ResultAPI";
import type Status from "types/Status";
import type CandidateActions from "types/CandidateActions";
import fields from "./parse-links-sse";
import "styles/components/form.css";
import "./form-parse-links-sse.css";

interface Props {
  /** The ID of the assignment to parse. */
  id: number;

  /** A function that uses reducers to update the candidates state. */
  dispatch: Dispatch<CandidateActions>;

  /** A script to submit data. The return complies with the ResultsAPI interface. */
  fetchScript: (uri: string, init: FetchOptions) => Promise<ResultsAPI>;
}

export default function FormParseLinksSSE({ id, dispatch, fetchScript }: Props) {
  // Global state
  const { closeDialog } = useDialog();

  // Local state
  const [status, setStatus] = useState<Status>("form-stand-by");
  const [message, setMessage] = useState("");

  // Properties
  const uri = `/api/parse-links-sse/${id}`;

  // Methods
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    onLoading(event);

    try {
      const formData = gatherFormData(event.currentTarget);
      const parsedLinks = textAreaToArray(formData.unparsed_links);
      const query = parsedLinks.map((link) => `links=${link}`).join("&");
      const eventSource = new EventSource(`${uri}?${query}`);

      eventSource.onmessage = (event) => updateEvent(event);
      eventSource.onerror = () => endEvent(eventSource);
    } catch (error: unknown) {
      onFailure(error);
    }
  }

  function updateEvent(event: MessageEvent) {
    const { candidate, report } = JSON.parse(event.data);

    // Note: This should be part of the dispatcher, like send the payload: can, rep and let the reducer protect the state
    if (report.severity < 2) {
      dispatch({ type: "add-single", payload: candidate });
    } else {
      console.warn("Broken candidate", candidate, report);
    }
  }

  async function endEvent(eventSource: EventSource) {
    // Remove this code, as its part of Progress Worker
    eventSource.close();
    setStatus("ready");

    await waitForSeconds(0.5);
    closeDialog();
  }

  function onFailure(error: Error | unknown) {
    console.error(error);
    setStatus("error");
    setMessage("Could not scan LinkedIn profiles");
  }

  function onLoading(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("Scaning LinkedIn profiles");
  }

  return (
    <form className="form form-parse-links" onSubmit={(event) => onSubmit(event)}>
      <h2>Add Candidates (SSE)</h2>
      <InputFields fields={fields} />
      <FormStatus status={status} message={message} />
      <div className="buttons">
        <Button disabled={status === "loading"} icon="circle-check" label="Create" primary />
        <Button disabled={status === "loading"} label="Dismiss" onClick={() => closeDialog()} />
      </div>
    </form>
  );
}
