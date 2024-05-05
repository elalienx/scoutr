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
  /** Make a single state conforming to ResultsAPI */
  // const [result, setResult] = useState<ResultsAPI>({data:[], status:"empty", message:""})
  const [status, setStatus] = useState<Status>("empty");
  const [message, setMessage] = useState("");

  // Properties
  const uri = "/api/assignments";

  /** 1A. Create input fields dynamically 📝 */
  /** Input fields take the data.json (rename to fields.json) and optionally the data (the values the recruiter put for the assignment/candidate)  */
  // Components
  // const InputFields = GenerateInputs(Data);

  // Methods
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("🕒 Creating new assignment");
    setStatus("loading");

    /** 2. Gather data 🧺 */
    const formData = new FormData(event.currentTarget);
    const assignment_name = formData.get(Data.assignment_name.name);
    const company_name = formData.get(Data.company_name.name);
    const company_image_url = "";
    const data = { assignment_name, company_name, company_image_url };

    /** 3. Package data 📦 */
    const options = {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify(data),
    };

    /** 4. Submit data 📧 */
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
    <form
      data-testid="form-assignment"
      className="form"
      onSubmit={(event) => onSubmit(event)}
    >
      <h2>New Assignment</h2>
      {/* 1B. Put the dynamic inputs 📝 */}
      <InputText {...Data.assignment_name} />
      <InputText {...Data.company_name} />
      <small className="info">{message}</small>
      <div className="buttons">
        <Button
          disabled={status === "loading"}
          icon="circle-check"
          label={"Create"}
          primary
        />
        <Button
          disabled={status === "loading"}
          label={"Dismiss"}
          onClick={() => closeDialog()}
        />
      </div>
    </form>
  );
}
