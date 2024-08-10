// Node modules
import { BrowserRouter } from "react-router-dom";

// Project files
import NavigationBar from "components/navigation-bar/NavigationBar";

/**
 * This component is wrapped in BrowserRouter to support routing
 * as it includes a Link component, which requires a Router context
 * to function correctly.
 */
export default {
  Default: (
    <BrowserRouter>
      <div className="page" style={{ maxWidth: "960px", width: "100%" }}>
        <NavigationBar response_rate={42} />
      </div>
    </BrowserRouter>
  ),
  "No responses": (
    <BrowserRouter>
      <div className="page" style={{ maxWidth: "960px", width: "100%" }}>
        <NavigationBar response_rate={0} />
      </div>
    </BrowserRouter>
  ),
  Empty: (
    <BrowserRouter>
      <div className="page" style={{ maxWidth: "960px", width: "100%" }}>
        <NavigationBar response_rate={-1} />
      </div>
    </BrowserRouter>
  ),
};
