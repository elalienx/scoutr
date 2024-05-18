// Node modules
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

// Project files
import Button from "components/button/Button";
import InputFields from "components/input-fields/InputFields";
import FormStatus from "components/form-status/FormStatus";
import useDialog from "state/DialogContextAPI";
import gatherFormData from "scripts/forms/gatherFormData";
import packageData from "scripts/forms/packageData";
import Assignment from "types/Assignment";
import FetchOptions from "types/FetchOptions";
import ResultsAPI from "types/ResultAPI";
import Status from "types/Status";
import fields from "./fields";
import "styles/components/form.css";
import waitForSeconds from "scripts/waitForSeconds";

interface Props {
  /** A script to submit data. The return complies with the ResultsAPI interface. */
  fetchScript: (uri: string, init: FetchOptions) => Promise<ResultsAPI>;
}

export default function FormNewAssignment({ fetchScript }: Props) {
  // Global state
  const navigate = useNavigate();
  const { closeDialog } = useDialog();

  // Local state
  const [status, setStatus] = useState<Status>("empty");
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
    setStatus("ready");
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
