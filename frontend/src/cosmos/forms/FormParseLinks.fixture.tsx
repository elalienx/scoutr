// Node modules
import { BrowserRouter } from "react-router-dom";

// Project files
import FormParseLinks from "forms/parse-links/FormParseLinks";
import MockSSEEOneCandidate from "scripts/mocks/mockSSEOneCandidate";
import MockSSEUnknownError from "scripts/mocks/mockSSEUnknownError";
import MockSSEManyCandidates from "scripts/fetch-sse/mocks/mockSSEManyCandidates";

// Properties
const id = 1;
const mockDispatch = () => {}; // empty on purpose just to render the component

/**
 * This component is wrapped in BrowserRouter to support routing
 * as it includes a Link component, which requires a Router context
 * to function correctly.
 */
export default {
  Default: (
    <BrowserRouter>
      <FormParseLinks id={id} dispatch={mockDispatch} FetchClass={MockSSEEOneCandidate} />
    </BrowserRouter>
  ),
  "Multiple candidates": (
    <BrowserRouter>
      <FormParseLinks id={id} dispatch={mockDispatch} FetchClass={MockSSEManyCandidates} />
    </BrowserRouter>
  ),
  "Unknown error": (
    <BrowserRouter>
      <FormParseLinks id={id} dispatch={mockDispatch} FetchClass={MockSSEUnknownError} />
    </BrowserRouter>
  ),
};
