// Node modules
import { BrowserRouter } from "react-router-dom";

// Project files
import NavigationBar from "components/navigation-bar/NavigationBar";

/**
 * About BrowserRouter
 * We wrap Card in BrowserRouter because it has a Link component that requires it.
 */
export default {
  Default: (
    <BrowserRouter>
      <NavigationBar response_rate={37} />
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
