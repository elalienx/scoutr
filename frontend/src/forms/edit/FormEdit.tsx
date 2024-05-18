// Node modules
import { FormEvent, useState } from "react";

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

interface Props {
  /** The uri to sent the data. It comes with the edit of the specific item to modify. */
  uri: string;

  /** The fields with the user written values */
  fields: InputField[];

  /** A script to submit data. The return complies with the ResultsAPI interface. */
  fetchScript: (uri: string, init: FetchOptions) => Promise<ResultsAPI>;

  /** The function that handles updating the state of the item edited */
  dispatcher: Function;
}

export default function FormEdit({ uri, fields, fetchScript, dispatcher }: Props) {
  // Global state
  const { closeDialog } = useDialog();

  // Local state
  const [status, setStatus] = useState<Status>("empty");
  const [message, setMessage] = useState("");

  // Methods
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    onLoading(event);

    try {
      const formData = gatherFormData(event.currentTarget);
      const fetchOptions = packageData("PATCH", formData);
      const result = await fetchScript(uri, fetchOptions);

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

  async function onSuccess(result: unknown) {
    setStatus("ready");
    dispatcher(result);

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
      <h2>Edit Information</h2>
      <InputFields fields={fields} />
      <FormStatus status={status} message={message} />
      <div className="buttons">
        <Button disabled={status === "loading"} icon="circle-check" label="Create" primary />
        <Button disabled={status === "loading"} label="Dismiss" onClick={() => closeDialog()} />
      </div>
    </form>
  );
}
