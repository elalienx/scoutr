// Node modules
import { FormEvent, useRef, useState } from "react";

// Project files
import Button from "components/button/Button";
import TextArea from "components/input-textarea/TextArea";
import textAreaToArray from "scripts/textAreaToArray";
import useDialog from "state/DialogContextAPI";
import ResultsAPI from "types/ResultsAPI";
import Status from "types/Status";
import "styles/components/form.css";

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
  const LinksRef = useRef<HTMLTextAreaElement>(null);

  // Properties
  const data = {
    label: "Paste the LinkedIn links here",
    placeholder: "www.linkedin.com/in/eduardo-alvarez-nowak",
    defaultValue: "",
    required: true,
    reference: LinksRef,
  };

  // Methods
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("Loading... 🕒");

    // Make sure this converts stuff into an array
    const links = textAreaToArray(LinksRef.current?.value);
    const data = { links: links };

    // add a try catch here
    await fetch(`/api/parse_links/${id}`, {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify(data),
    })
      .then((respone) => respone.json())
      .then((result) => onSuccess(result))
      .catch((error) => onFailure(error));
  }

  function onSuccess(result: ResultsAPI) {
    console.log(result);
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
    <form className="form" onSubmit={(event) => onSubmit(event)}>
      <h2>Add Candidates</h2>
      <TextArea {...data} />
      <small className="info">{message}</small>
      <div className="buttons">
        <Button
          label={"Create"}
          primary={true}
          icon="circle-check"
          disabled={status === "loading"}
        />
        <Button
          label={"Dismiss"}
          onClick={() => closeDialog()}
          disabled={status === "loading"}
        />
      </div>
    </form>
  );
}
