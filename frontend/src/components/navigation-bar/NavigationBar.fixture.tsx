// Node modules
import { BrowserRouter } from "react-router-dom";

// Project files
import NavigationBar from "./NavigationBar";

// Properties
const assignment = "Data Engineer";

/**
 * About BrowserRouter
 * We wrap Card in BrowserRouter because it has a Link component that requires it.
 */
export default {
  Default: (
    <BrowserRouter>
      <NavigationBar assignment_name={assignment} response_rate={37} />
    </BrowserRouter>
  ),
  "No responses": (
    <BrowserRouter>
      <NavigationBar assignment_name={assignment} response_rate={0} />
    </BrowserRouter>
  ),
  Empty: (
    <BrowserRouter>
      <NavigationBar assignment_name={assignment} response_rate={-1} />
    </BrowserRouter>
  ),
};
