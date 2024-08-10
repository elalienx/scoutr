// Node modules
import { BrowserRouter } from "react-router-dom";

// Project files
import Page404 from "pages/page-404/Page404";

/**
 * This page is wrapped in BrowserRouter to support routing
 * as it includes a Link component, which requires a Router context
 * to function correctly.
 */
export default {
  Default: (
    <BrowserRouter>
      <Page404 />
    </BrowserRouter>
  ),
};
