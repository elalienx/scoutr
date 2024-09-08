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
    <div id="logout">
      <h1>Logout</h1>
      <p>Click here to logout of Scoutr</p>
      <Button label={"Logout"} primary big icon="user" onClick={() => onLogout()} />
    </div>
  );
}
