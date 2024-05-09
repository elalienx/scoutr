// Node modules
import { useNavigate } from "react-router-dom";

// Project files
import Button from "components/button/Button";
import Illustration from "assets/page-404.png";
import "./page-404.css";

export default function page404() {
  // Global state
  const navigate = useNavigate();

  return (
    <div id="page-404">
      <div className="container">
        <img src={Illustration} alt="A woman crouching petting a dog" />
        <div className="content">
          <h1>Can’t find the page</h1>
          <p className="subtitle">404 - Page not found</p>
          <p>Not even Fido could find your page.</p>
          <p>Please go back to the home page and try again…</p>
        </div>
        <Button
          label={"Go home"}
          icon="house-chimney"
          primary
          big
          onClick={() => navigate("/")}
        />
      </div>
    </div>
  );
}
