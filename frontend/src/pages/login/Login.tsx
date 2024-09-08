// Node modules
import InputFields from "components/input-fields/InputFields";
import { FormEvent } from "react";

// Project files
import useAuth from "state/AuthContextAPI";
import fields from "./fields";
import gatherFormData from "scripts/forms/gatherFormData";
import Button from "components/button/Button";
import FormStatus from "components/form-status/FormStatus";
import "styles/components/form.css";
import "./login.css";

export default function Login() {
  // Global state
  const { login, status, message } = useAuth();

  // Methods
  async function onLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const { email, password } = gatherFormData(event.currentTarget);

    login(email, password);
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
        <form className="form" onSubmit={(event) => onLogin(event)}>
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
