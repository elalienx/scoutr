// Node modules
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

// Project files
import Button from "components/button/Button";
import InputFields from "components/input-fields/InputFields";
import useDialog from "hooks/dialog-state/DialogContextAPI";
import gatherFormData from "scripts/forms/gatherFormData";
import packageData from "scripts/forms/packageData";
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
      // here we should go to onConnected or onServerResponse, because that is what we know at this stage,
      /**
       * Here we should go to a method called onResponse() or onResult(),
       * because that's what we know at this stage, that we got a ResultAPI
       * from the server, but does not know if is positive or negative.
       */
      onSuccess(result);
    } catch (error: any) {
      /**
       * This one hanldes the scenario were we could not establish a connection
       * to the server.
       *
       * This can be becuase:
       * 1. There is no internet
       * 2. The URI is invalid or does not exist anymore in the server.
       * 3. The formulary data is invalid.
       * 4. The formualry data could not be packaged.
       *  */
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

    setStatus("ready");
    setMessage("✅ Assignment created");
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
