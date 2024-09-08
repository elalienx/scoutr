// Node modules
import { FormEvent, useState } from "react";

// Project files
import useAuth from "state/AuthContextAPI";

export default function Login() {
  // Global state
  const { login } = useAuth();

  // Local state
  const [email, setEmail] = useState("");

  // Methods
  async function onLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    await login(email);
  }

  return (
    <div id="login">
      <h2>📧 Login</h2>
      <form onSubmit={(event) => onLogin(event)}>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="name@novare.se"
          />
        </label>
        <button type="submit" className="button">
          Log in
        </button>
      </form>
    </div>
  );
}
