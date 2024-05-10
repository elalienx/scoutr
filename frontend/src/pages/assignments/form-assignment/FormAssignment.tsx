// Node modules
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

// Project files
import Button from "components/button/Button";
import InputFields from "components/input-fields/InputFields";
import useDialog from "hooks/dialog-state/DialogContextAPI";
import gatherFormData from "scripts/forms/gatherFormData";
import packageData from "scripts/forms/packageData";
import Assignment from "types/Assignment";
import FetchOptions from "types/FetchOptions";
import ResultsAPI from "types/ResultsAPI";
import Status from "types/Status";
import fields from "./fields";
import "styles/components/form.css";

interface Props {
  /** A script to fetch data. The return complies with the ResultsAPI interface. */
  fetchScript: (uri: string, init: FetchOptions) => Promise<ResultsAPI>;
}

export default function FormAssignment({ fetchScript }: Props) {
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
    } catch (error: any) {
      onFailure(error);
    }
  }

  function onResult(result: ResultsAPI) {
    const { data, message, status } = result;

    if (status === "error") onFailure(message);
    else onSuccess(data);
  }

  function onLoading(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("🕒 Creating new assignment");
  }

  function onSuccess(assignment: Assignment) {
    setStatus("ready");
    setMessage("✅ Assignment created");
    navigate(`/candidates/${assignment.id}`);
    closeDialog();
  }

  function onFailure(error: Error | string) {
    console.error(error);
    setStatus("error");
    setMessage("🚨 Could not create new assignment");
  }

  return (
    <form data-testid="form-assignment" className="form" onSubmit={onSubmit}>
      <h2>New Assignment</h2>
      <InputFields fields={fields} />
      <small data-testid="status" className="info">
        {message}
      </small>
      <div className="buttons">
        <Button disabled={status === "loading"} icon="circle-check" label="Create" primary />
        <Button disabled={status === "loading"} label="Dismiss" onClick={() => closeDialog()} />
      </div>
    </form>
  );
}
