// Node modules
import { useState } from "react";
import type { FormEvent } from "react";
import { useNavigate } from "react-router-dom";

// Project files
import Button from "components/button/Button";
import FormStatus from "components/form-status/FormStatus";
import InputFields from "components/input-fields/InputFields";
import gatherFormData from "scripts/forms/gatherFormData";
import packageData from "scripts/forms/packageData";
import waitForSeconds from "scripts/waitForSeconds";
import useDialog from "state/DialogContextAPI";
import type Assignment from "types/Assignment";
import type FetchOptions from "types/FetchOptions";
import type ResultsAPI from "types/ResultAPI";
import type StatusForm from "types/StatusForm";
import fields from "./fields";
import "styles/components/form.css";

interface Props {
  /** A script to submit data. The return complies with the ResultsAPI interface. */
  fetchScript: (uri: string, init: FetchOptions) => Promise<ResultsAPI>;
}

export default function FormNewAssignment({ fetchScript }: Props) {
  // Global state
  const navigate = useNavigate();
  const { closeDialog } = useDialog();

  // Local state
  const [status, setStatus] = useState<StatusForm>("stand-by");
  const [message, setMessage] = useState("");

  // Properties
  const uri = "/api/assignments";

  // Methods
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    onLoading(event);

    try {
      const formData = gatherFormData(event.currentTarget);
      const fetchOptions = packageData("POST", formData);
      const result = await fetchScript(uri, fetchOptions);

      onResult(result);
    } catch (error: unknown) {
      onFailure(error);
    }
  }

  function onLoading(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("Creating new assignment");
  }

  function onResult(result: ResultsAPI) {
    const { data, message, status } = result;

    if (status === "error") onFailure(message);
    else onSuccess(data);
  }

  async function onSuccess(newAssignment: Assignment) {
    setStatus("complete");
    setMessage("Assignment created");

    await waitForSeconds(0.5);
    navigate(`/candidates/${newAssignment.id}`);
    closeDialog();
  }

  function onFailure(error: Error | unknown) {
    console.error(error);
    setStatus("error");
    setMessage("Could not create assignment");
  }

  return (
    <form data-testid="form-assignment" className="form" onSubmit={onSubmit}>
      <h2>New Assignment</h2>
      <InputFields fields={fields} />
      <FormStatus status={status} message={message} />
      <div className="buttons">
        <Button disabled={status === "loading"} icon="circle-check" label="Create" primary />
        <Button disabled={status === "loading"} label="Dismiss" onClick={() => closeDialog()} />
      </div>
    </form>
  );
}
