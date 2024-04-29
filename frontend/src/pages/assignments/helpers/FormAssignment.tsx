// Node modules
import { FormEvent, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

// Project files
import Button from "components/button/Button";
import InputText from "components/input-text/InputText";
import useDialog from "state/DialogContextAPI";
import ResultsAPI from "types/ResultsAPI";
import Status from "types/Status";
import "styles/components/form.css";

export default function FormAssignment() {
  // Global state
  const { closeDialog } = useDialog();
  const navigate = useNavigate();

  // Local state
  const [status, setStatus] = useState<Status>("empty");
  const [message, setMessage] = useState("");
  const AssignmentNameRef = useRef<HTMLInputElement>(null);
  const CompanyRef = useRef<HTMLInputElement>(null);

  // Properties
  const data = {
    assignment: {
      label: "Assignment name",
      placeholder: "Graphic Designer",
      defaultValue: "",
      required: true,
      reference: AssignmentNameRef,
    },
    company: {
      label: "Company",
      placeholder: "Spotify",
      defaultValue: "",
      required: true,
      reference: CompanyRef,
    },
  };

  // Methods
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");

    const assignment_name = AssignmentNameRef.current?.value;
    const company_name = CompanyRef.current?.value;
    const company_image_url = ""; // because the database needs it.
    const data = { assignment_name, company_name, company_image_url };

    // add a try catch here
    await fetch("/api/assignments", {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify(data),
    })
      .then((respone) => respone.json())
      .then((result) => onSuccess(result))
      .catch((error) => onFailure(error));
  }

  function onSuccess(result: ResultsAPI) {
    const id = result.data.id;

    setStatus("ready");
    setMessage("Success! ✅");
    navigate(`/candidates/${id}`);
    closeDialog();
  }

  function onFailure(error: Error) {
    console.error(error);
    setStatus("error");
    setMessage("Could not create assignment! ");
  }

  return (
    <form className="form-assignment" onSubmit={(event) => onSubmit(event)}>
      <h2>New Assignment</h2>
      <InputText {...data.assignment} />
      <InputText {...data.company} />
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
