// Node modules
import { Dispatch, FormEvent, useState } from "react";

// Project files
import Button from "components/button/Button";
import FormStatus from "components/form-status/FormStatus";
import InputFields from "components/input-fields/InputFields";
import gatherFormData from "scripts/forms/gatherFormData";
import packageData from "scripts/forms/packageData";
import useDialog from "state/DialogContextAPI";
import FetchOptions from "types/FetchOptions";
import InputField from "types/InputField";
import ResultsAPI from "types/ResultAPI";
import Status from "types/Status";
import "styles/components/form.css";
import waitForSeconds from "scripts/waitForSeconds";
import CandidateActions from "types/CandidateActions";

interface Props {
  /** The id of the item to update. */
  id: number;

  /** The uri to sent the data. */
  uri: string;

  /** The fields with the user written values */
  fields: InputField[];

  /** A script to submit data. The return complies with the ResultsAPI interface. */
  fetchScript: (uri: string, init: FetchOptions) => Promise<ResultsAPI>;

  /** The function that handles updating the state of the item edited */
  dispatcher: Dispatch<CandidateActions>;
}

export default function FormEdit({ id, uri, fields, fetchScript, dispatcher }: Props) {
  // Global state
  const { closeDialog } = useDialog();

  // Local state
  const [status, setStatus] = useState<Status>("form-stand-by");
  const [message, setMessage] = useState("");

  // Properties
  const uriWidthId = uri + id;

  // Methods
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    onLoading(event);

    try {
      const formData = gatherFormData(event.currentTarget);
      const fetchOptions = packageData("PATCH", formData);
      const result = await fetchScript(uriWidthId, fetchOptions);

      onResult(result);
    } catch (error: unknown) {
      onFailure(error);
    }
  }

  function onLoading(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("Saving changes");
  }

  function onResult(result: ResultsAPI) {
    const { data, message, status } = result;

    if (status === "error") onFailure(message);
    else onSuccess(data);
  }

  async function onSuccess(data: unknown) {
    setStatus("ready");
    setMessage("Edited candidate");
    dispatcher({ type: "edit-single", payload: { id: id, updates: data } });

    await waitForSeconds(0.5);
    closeDialog();
  }

  function onFailure(error: Error | unknown) {
    console.error(error);
    setStatus("error");
    setMessage("Could not save changes");
  }

  return (
    <form data-testid="form-assignment" className="form" onSubmit={onSubmit}>
      <InputFields fields={fields} />
      <FormStatus status={status} message={message} />
      <div className="buttons">
        <Button disabled={status === "loading"} icon="circle-check" label="Create" primary />
        <Button disabled={status === "loading"} label="Dismiss" onClick={() => closeDialog()} />
      </div>
    </form>
  );
}
