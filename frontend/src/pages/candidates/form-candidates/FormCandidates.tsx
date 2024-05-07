// Node modules
import { FormEvent, useState } from "react";

// Project files
import Button from "components/button/Button";
import InputFields from "components/input-fields/InputFields";
import textAreaToArray from "scripts/textAreaToArray";
import useDialog from "state/DialogContextAPI";
import ResultsAPI from "types/ResultsAPI";
import Status from "types/Status";
import fields from "./fields";
import "./form-candidates.css";
import "styles/components/form.css";
import gatherFormData from "scripts/gatherFormData";

interface Props {
  /** The ID of the assignment to parse. */
  id: number;

  /** Set Candidates */
  state: [any, any];
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
    const formData = gatherFormData(event.currentTarget);
    const links = textAreaToArray(formData.links);
    const options = {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify(links),
    };

    event.preventDefault();
    setStatus("loading");
    setMessage("Loading... 🕒");

    await fetch(uri, options)
      .then((respone) => respone.json())
      .then((result) => onSuccess(result))
      .catch((error) => onFailure(error));
  }

  function onSuccess(result: ResultsAPI) {
    const data = result.data;

    setCandidates([...candidates, ...data]);
    setStatus("ready");
    setMessage("Success! ✅");
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
