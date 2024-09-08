// Node modules
import InputFields from "components/input-fields/InputFields";
import { FormEvent } from "react";

// Project files
import useAuth from "state/AuthContextAPI";
import fields from "./fields";
import gatherFormData from "scripts/forms/gatherFormData";

export default function Login() {
  // Global state
  const { login } = useAuth();

  // Methods
  async function onLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const { email, password } = gatherFormData(event.currentTarget);

    login(email, password);
  }

  return (
    <div id="login">
      <h2>📧 Login</h2>
      <form onSubmit={(event) => onLogin(event)}>
        <InputFields fields={fields} />
        <button type="submit" className="button">
          Log in
        </button>
      </form>
    </div>
  );
}
