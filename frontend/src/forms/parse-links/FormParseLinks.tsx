// Node modules
import { useState } from "react";
import type { FormEvent } from "react";

// Project files
import Button from "components/button/Button";
import InputFields from "components/input-fields/InputFields";
import FormStatus from "components/form-status/FormStatus";
import gatherFormData from "scripts/forms/gatherFormData";
import textAreaToArray from "scripts/forms/textAreaToArray";
import waitForSeconds from "scripts/waitForSeconds";
import useDialog from "state/DialogContextAPI";
import type Status from "types/Status";
import fields from "./fields";
import "styles/components/form.css";
import "./form-parse-links.css";

interface Props {
  /** The links the FormParseLinks will gather from the user and sent to the Progress Worker. */
  setLinks: Function;
}

export default function FormParseLinks({ setLinks }: Props) {
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

      setLinks(parsedLinks);
      onSuccess();
    } catch (error: unknown) {
      onFailure(error);
    }
  }

  async function onSuccess() {
    setStatus("ready");
    setMessage("LinkedIn links ready to be scanned");

    await waitForSeconds(0.1);
    closeDialog();
  }

  function onFailure(error: Error | unknown) {
    console.error(error);
    setStatus("error");
    setMessage("Could not collect LinkedIn links to scan");
  }

  function onLoading(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("Collecting LinkedIn links to scan");
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
