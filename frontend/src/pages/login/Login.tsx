// Node modules
import InputFields from "components/input-fields/InputFields";
import { FormEvent, useState } from "react";

// Project files
import useAuth from "state/AuthContextAPI";
import fields from "./fields";
import gatherFormData from "scripts/forms/gatherFormData";
import Button from "components/button/Button";
import FormStatus from "components/form-status/FormStatus";
import waitForSeconds from "scripts/waitForSeconds";
import StatusForm from "types/StatusForm";
import "styles/components/form.css";
import "./login.css";
import ResultsAPI from "types/ResultAPI";
import { signIn } from "scripts/firebase/auth";

export default function Login() {
  // Global state
  const { login } = useAuth();

  // Local state
  const [status, setStatus] = useState<StatusForm>("stand-by");
  const [message, setMessage] = useState("");

  // Methods
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    onLoading(event);

    try {
      const formData = gatherFormData(event.currentTarget);
      const { email, password } = formData;
      const result = await signIn(email, password);

      onResult(result);
    } catch (error: unknown) {
      onFailure(error);
    }
  }

  function onLoading(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("Login you in");
  }

  function onResult(result: ResultsAPI) {
    const { data, message, status } = result;

    if (status === "error") onFailure(message);
    else onSuccess(data);
  }

  async function onSuccess(uid: string) {
    setStatus("complete");
    setMessage("Logged!");

    await waitForSeconds(0.5);
    login(uid);
  }

  function onFailure(error: Error | unknown) {
    console.error(error);
    setStatus("error");
    setMessage("Could not log you in");
  }

  return (
    <div id="login">
      <div className="container">
        {/* Hero */}
        <header className="hero">
          <h1>
            Meet
            <br />
            Scoutr
          </h1>
          <span className="subtitle">Your LinkedIn Headhunter Companion</span>
        </header>

        {/* Form */}
        <form className="form" onSubmit={(event) => onSubmit(event)}>
          <h2>Login</h2>
          <InputFields fields={fields} />
          <FormStatus status={status} message={message} />
          <div className="buttons">
            <Button label={"Login"} big primary />
          </div>
        </form>
      </div>
    </div>
  );
}
