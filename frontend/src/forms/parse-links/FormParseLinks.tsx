// Node modules
import { useState } from "react";
import type { Dispatch, FormEvent } from "react";

// Project files
import Button from "components/button/Button";
import InputFields from "components/input-fields/InputFields";
import FormStatus from "components/form-status/FormStatus";
import MiniProgressWorker from "components/mini-progress-worker/MiniProgressWorker";
import gatherFormData from "scripts/forms/gatherFormData";
import textAreaToArray from "scripts/forms/textAreaToArray";
import waitForSeconds from "scripts/waitForSeconds";
import stringArrayToURL from "scripts/forms/stringArrayToURL";
import removeQueryFromURL from "scripts/forms/removeQueryFromURL";
import useDialog from "state/DialogContextAPI";
import type StatusForm from "types/StatusForm";
import type CandidateActions from "types/CandidateActions";
import type ReportLog from "types/ReportLog";
import ReportSeverity from "types/ReportSeverity";
import fields from "./fields";
import "styles/components/form.css";
import "./form-parse-links.css";

interface Props {
  /** The ID of the assignment to parse. */
  id: number;

  /** A function that uses reducers to update the candidates state. */
  dispatch: Dispatch<CandidateActions>;

  /** The script used for initializing the Server Side Event. */
  FetchClass: any;
}
export default function FormParseLinks({ id, FetchClass, dispatch }: Props) {
  // Global state
  const { closeDialog } = useDialog();

  // Local state
  const [status, setStatus] = useState<StatusForm>("stand-by");
  const [message, setMessage] = useState("");
  const [reports, setReports] = useState<ReportLog[]>([]);

  // Methods
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    onLoading(event);

    try {
      const formData = gatherFormData(event.currentTarget);
      const parsedLinks = textAreaToArray(formData.unparsed_links);
      const removedLinkedInQueries = parsedLinks.map((item) => removeQueryFromURL(item));
      const encodedLinks = removedLinkedInQueries.map((item) => encodeURI(item));

      const query = stringArrayToURL(encodedLinks);
      const uriSSE = `/sse/parse-links/${id}?${query}`;
      const eventSource = new FetchClass(uriSSE);

      eventSource.addEventListener("pepito", (event: MessageEvent) => onErrorSSE(event)); // we need to decide if this takes to other method or what
      eventSource.onmessage = (event: MessageEvent) => onCandidateReceived(event);
      eventSource.onerror = () => onConnectionOver(eventSource); // note: onerror occurs when the connection is finished not neccesarily on error
    } catch (error: unknown) {
      onFailure(error);
    }
  }

  function onLoading(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("Collecting LinkedIn links to scan");
  }

  function onFailure(error: Error | unknown) {
    console.error(error);
    setStatus("error");
    setMessage("Could not collect LinkedIn links to scan");
  }

  function onCandidateReceived(event: MessageEvent) {
    const { candidate, report } = JSON.parse(event.data);
    const { severity } = report;
    const { MISSING_SOME_FIELDS } = ReportSeverity;

    setReports((prev) => [...prev, report]);

    if (severity <= MISSING_SOME_FIELDS) dispatch({ type: "add-single", payload: candidate });
  }

  function onErrorSSE(event: any) {
    console.log("onErrorSSE() event:");
    console.log(event);
  }

  async function onConnectionOver(eventSource: EventSource) {
    eventSource.close();
    setStatus("complete");
    setMessage("Finished searching");

    await waitForSeconds(1);
    closeDialog();
  }

  return (
    <form className="form form-parse-links" onSubmit={(event) => onSubmit(event)}>
      <h2>Add Candidates</h2>
      <InputFields fields={fields} />
      <FormStatus status={status} message={message} />
      <MiniProgressWorker reports={reports} />
      <div className="buttons">
        <Button disabled={status === "loading"} icon="circle-check" label="Create" primary />
        <Button disabled={status === "loading"} label="Dismiss" onClick={() => closeDialog()} />
      </div>
    </form>
  );
}
