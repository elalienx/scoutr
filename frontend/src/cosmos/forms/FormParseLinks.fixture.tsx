// Node modules
import { BrowserRouter } from "react-router-dom";

// Project files
import FormParseLinks from "forms/parse-links/FormParseLinks";
import MockSSEEOneCandidate from "scripts/fetch-sse/mocks/mockSSEOneCandidate";
import MockSSEUnknownError from "scripts/fetch-sse/mocks/mockSSEUnknownError";
import MockSSEManyCandidates from "scripts/fetch-sse/mocks/mockSSEManyCandidates";

// Properties
const id = 1;
const mockDispatch = () => {};

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
