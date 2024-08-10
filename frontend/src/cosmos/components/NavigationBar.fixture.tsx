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
      <NavigationBar response_rate={42} />
    </BrowserRouter>
  ),
  "No responses": (
    <BrowserRouter>
      <NavigationBar response_rate={0} />
    </BrowserRouter>
  ),
  Empty: (
    <BrowserRouter>
      <NavigationBar response_rate={-1} />
    </BrowserRouter>
  ),
};
