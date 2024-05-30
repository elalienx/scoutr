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
import stringArrayToURL from "scripts/forms/stringArrayToURL";
import useDialog from "state/DialogContextAPI";
import type Status from "types/Status";
import type CandidateActions from "types/CandidateActions";
import fields from "./fields";
import "styles/components/form.css";
import "./form-parse-links.css";

interface Props {
  /** The ID of the assignment to parse. */
  id: number;

  /** A function that uses reducers to update the candidates state. */
  dispatch: Dispatch<CandidateActions>;

  /** The script used for initializing the Server Side Event */
  FetchClass: any;
}
export default function FormParseLinks({ id, FetchClass, dispatch }: Props) {
  // Global state
  const { closeDialog } = useDialog();

  // Local state
  const [status, setStatus] = useState<Status>("form-stand-by");
  const [message, setMessage] = useState("");

  // Methods
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    onLoading(event);

    try {
      const formData = gatherFormData(event.currentTarget);
      const parsedLinks = textAreaToArray(formData.unparsed_links);
      const query = stringArrayToURL(parsedLinks);
      const uriSSE = `/sse/parse-links/${id}?${query}`;
      const eventSource = new FetchClass(uriSSE);

      eventSource.onmessage = (event: MessageEvent) => onUpdate(event);
      eventSource.onerror = () => onSuccess(eventSource); // note: onerror occurs when the connection is severed not neccesarily on error
    } catch (error: unknown) {
      onFailure(error);
    }
  }

  function onLoading(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("Collecting LinkedIn links to scan");
  }

  function onUpdate(event: MessageEvent) {
    const { candidate, report } = JSON.parse(event.data);
    console.log("New profile scanned");

    // Refactor: add if scanned === totalLinks go onSuccess()

    if (report.severity < 2) dispatch({ type: "add-single", payload: candidate });
    else console.warn("Broken profile", report);
  }

  async function onSuccess(eventSource: EventSource) {
    eventSource.close();
    setStatus("ready");
    setMessage("LinkedIn links scanned");

    await waitForSeconds(0.5);
    closeDialog();
  }

  function onFailure(error: Error | unknown) {
    console.error(error);
    setStatus("error");
    setMessage("Could not collect LinkedIn links to scan");
  }

  return (
    <form
      data-testid="form-parse-links"
      className="form form-parse-links"
      onSubmit={(event) => onSubmit(event)}
    >
      <h2>Add Candidates</h2>
      <InputFields fields={fields} />
      <FormStatus status={status} message={message} />
      <div className="buttons">
        <Button disabled={status === "loading"} icon="circle-check" label="Create" primary />
        <Button disabled={status === "loading"} label="Dismiss" onClick={() => closeDialog()} />
      </div>
    </form>
  );
}
