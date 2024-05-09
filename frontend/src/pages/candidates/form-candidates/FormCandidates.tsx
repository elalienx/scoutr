// Node modules
import { FormEvent, useState } from "react";

// Project files
import Button from "components/button/Button";
import InputFields from "components/input-fields/InputFields";
import gatherFormData from "scripts/form-utils/gatherFormData";
import packageData from "scripts/form-utils/packageData";
import textAreaToArray from "scripts/form-utils/textAreaToArray";
import useDialog from "hooks/dialog-state/DialogContextAPI";
import Candidate from "types/Candidate";
import ResultsAPI from "types/ResultsAPI";
import Status from "types/Status";
import fields from "./fields";
import "styles/components/form.css";
import "./form-candidates.css";

interface Props {
  /** The ID of the assignment to parse. */
  id: number;

  /** Set Candidates */
  state: [Candidate[], Function];
}

export default function FormCandidates({ id, state }: Props) {
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

    const formData = gatherFormData(event.currentTarget);
    const parsedLinks = textAreaToArray(formData.unparsed_links);
    const body = { links: parsedLinks };
    const fetchOptions = packageData("POST", body);

    await fetch(uri, fetchOptions)
      .then((respone) => respone.json())
      .then((result) => onSuccess(result))
      .catch((error) => onFailure(error));
  }

  function onLoading(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("Loading... 🕒");
  }

  function onSuccess(result: ResultsAPI) {
    const data = result.data;

    setCandidates([...candidates, ...data]);
    closeDialog();
  }

  function onFailure(error: Error) {
    console.error(error);
    setStatus("error");
    setMessage("Could not parse Links! 🚨");
  }

  return (
    <form
      className="form form-candidates"
      onSubmit={(event) => onSubmit(event)}
    >
      <h2>Add Candidates</h2>
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
