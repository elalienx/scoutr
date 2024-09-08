// Node modules
import { useNavigate } from "react-router-dom";

// Project files
import Button from "components/button/Button";
import useAuth from "state/AuthContextAPI";

export default function Logoout() {
  // Global state
  const navigate = useNavigate();
  const { logout } = useAuth();

  async function onLogout() {
    await logout();

    navigate("/");
  }

  return (
    <div id="login">
      <div className="container">
        <header className="hero">
          <h1>
            Meet
            <br />
            Scoutr
          </h1>
          <span className="subtitle">Your LinkedIn Headhunter Companion</span>
          <form className="form">
            <div className="buttons">
              <Button label={"Logout"} big primary icon="x-mark" onClick={() => onLogout()} />
            </div>
          </form>
        </header>
      </div>
    </div>
  );
}
