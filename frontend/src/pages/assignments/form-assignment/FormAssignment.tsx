// Node modules
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

// Project files
import Button from "components/button/Button";
import InputFields from "components/input-fields/InputFields";
import useDialog from "state/DialogContextAPI";
import ResultsAPI from "types/ResultsAPI";
import Status from "types/Status";
import fields from "./fields";
import "styles/components/form.css";

export default function FormAssignment() {
  // Global state
  const { closeDialog } = useDialog();
  const navigate = useNavigate();

  // Local state
  /** Make a single state conforming to ResultsAPI */
  const [status, setStatus] = useState<Status>("empty");
  const [message, setMessage] = useState("");

  // Properties
  const uri = "/api/assignments";

  // Methods
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("🕒 Creating new assignment");
    setStatus("loading");

    /** 2. Gather data 🧺 */
    const formData = new FormData(event.currentTarget);
    const assignment_name = formData.get(fields[0].name);
    const company_name = formData.get(fields[1].name);
    const body = { assignment_name, company_name };

    /** 3. Package data 📦 */
    const options = {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify(body),
    };

    /** 4. Submit data 📮 */
    await fetch(uri, options)
      .then((respone) => respone.json())
      .then((result) => onSuccess(result))
      .catch((error) => onFailure(error));
  }

  function onSuccess(result: ResultsAPI) {
    const { id } = result.data;

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
