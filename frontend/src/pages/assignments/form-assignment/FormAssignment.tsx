// Node modules
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

// Project files
import Button from "components/button/Button";
import InputText from "components/input-text/InputText";
import useDialog from "state/DialogContextAPI";
import ResultsAPI from "types/ResultsAPI";
import Status from "types/Status";
import Data from "./data.json";
import "styles/components/form.css";

export default function FormAssignment() {
  // Global state
  const { closeDialog } = useDialog();
  const navigate = useNavigate();

  // Local state
  const [status, setStatus] = useState<Status>("empty");
  const [message, setMessage] = useState("");

  // Methods
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    const uri = "/api/assignments";
    const formData = new FormData(event.currentTarget);
    const assignment_name = formData.get(Data.assignment_name.name);
    const company_name = formData.get(Data.company_name.name);
    const company_image_url = "";
    const body = { assignment_name, company_name, company_image_url };
    const options = {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify(body),
    };

    event.preventDefault();
    setMessage("🕒 Creating new assignment");
    setStatus("loading");

    await fetch(uri, options)
      .then((respone) => respone.json())
      .then((result) => onSuccess(result))
      .catch((error) => onFailure(error));
  }

  function onSuccess(result: ResultsAPI) {
    const id = result.data.id;

    setMessage("✅ Created new assignment");
    setStatus("ready");
    navigate(`/candidates/${id}`);
    closeDialog();
  }

  function onFailure(error: Error) {
    console.error(error);
    setMessage("🚨 Could not create new assignment");
    setStatus("error");
  }

  return (
    <form className="form" onSubmit={(event) => onSubmit(event)}>
      <h2>New Assignment</h2>
      <InputText {...Data.assignment_name} />
      <InputText {...Data.company_name} />
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
