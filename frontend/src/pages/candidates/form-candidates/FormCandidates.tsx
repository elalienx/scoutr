// Node modules
import { FormEvent, useState } from "react";

// Project files
import Button from "components/button/Button";
import InputFields from "components/input-fields/InputFields";
import FormStatus from "components/form-status/FormStatus";
import gatherFormData from "scripts/forms/gatherFormData";
import packageData from "scripts/forms/packageData";
import textAreaToArray from "scripts/forms/textAreaToArray";
import useDialog from "state/DialogContextAPI";
import Candidate from "types/Candidate";
import FetchOptions from "types/FetchOptions";
import ResultsAPI from "types/ResultAPI";
import Status from "types/Status";
import fields from "./fields";
import "styles/components/form.css";
import "./form-candidates.css";
import waitForSeconds from "scripts/waitForSeconds";

interface Props {
  /** The ID of the assignment to parse. */
  id: number;

  /** Set Candidates */
  state: [Candidate[], Function];

  /** A script to submit data. The return complies with the ResultsAPI interface. */
  fetchScript: (uri: string, init: FetchOptions) => Promise<ResultsAPI>;
}

export default function FormCandidates({ id, state, fetchScript }: Props) {
  const [candidates, setCandidates] = state;

  // Global state
  const { closeDialog } = useDialog();

  // Local state
  const [status, setStatus] = useState<Status>("empty");
  const [message, setMessage] = useState("");

  // Properties
  const uri = "/api/parse_links/" + id;

  // Methods
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    onLoading(event);

    try {
      const formData = gatherFormData(event.currentTarget);
      const parsedLinks = textAreaToArray(formData.unparsed_links);
      const body = { links: parsedLinks };
      const fetchOptions = packageData("POST", body);
      const result = await fetchScript(uri, fetchOptions);

      onResult(result);
    } catch (error: unknown) {
      onFailure(error);
    }
  }

  function onLoading(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("Scaning LinkedIn profiles");
  }

  function onResult(result: ResultsAPI) {
    const { data, message, status } = result;

    if (status === "error") onFailure(message);
    else onSuccess(data);
  }

  async function onSuccess(newCandidates: Candidate[]) {
    setStatus("ready");
    setMessage("LinkedIn profiles scanned");

    await waitForSeconds(0.5);
    setCandidates([...candidates, ...newCandidates]);
    closeDialog();
  }

  function onFailure(error: Error | unknown) {
    console.error(error);
    setStatus("error");
    setMessage("Could not scan LinkedIn profiles");
  }

  return (
    <form
      data-testid="form-candidates"
      className="form form-candidates"
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
