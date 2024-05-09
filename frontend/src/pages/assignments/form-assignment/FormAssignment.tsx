// Node modules
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

// Project files
import Button from "components/button/Button";
import InputFields from "components/input-fields/InputFields";
import gatherFormData from "scripts/gatherFormData";
import packageData from "scripts/packageData";
import useDialog from "state/DialogContextAPI";
import Assignment from "types/Assignment";
import ResultsAPI from "types/ResultsAPI";
import Status from "types/Status";
import fields from "./fields";
import "styles/components/form.css";

interface Props {
  /** A script to fetch data. The return complies with the ResultsAPI interface. */
  fetchScript: (
    uri: string,
    init: object
  ) => Promise<{
    data: Assignment;
    status: Status;
    message: string;
  }>;
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
      onSuccess(result);
    } catch (error: any) {
      onFailure(error);
    }
  }

  function onLoading(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("🕒 Creating new assignment");
    setStatus("loading");
  }

  function onSuccess(result: ResultsAPI) {
    const { id } = result.data;

    setMessage("Assignment created");
    navigate(`/candidates/${id}`);
    closeDialog();
  }

  function onFailure(error: Error) {
    console.error(error);
    setMessage("🚨 Could not create new assignment");
    setStatus("error");
  }

  return (
    <form data-testid="form-assignment" className="form" onSubmit={onSubmit}>
      <h2>New Assignment</h2>
      <InputFields fields={fields} />
      <small className="info">{message}</small>
      <div className="buttons">
        <Button
          disabled={status === "loading"}
          icon="circle-check"
          label="Create"
          primary
        />
        <Button
          disabled={status === "loading"}
          label="Dismiss"
          onClick={() => closeDialog()}
        />
      </div>
    </form>
  );
}
