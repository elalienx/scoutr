// Project files
import FormNewAssignment from "forms/new-assignment/FormNewAssignment";
import mockFetchAssignment from "scripts/fetch-service/mocks/mockFetchAssignment";
import mockFetchError from "scripts/fetch-service/mocks/mockFetchError";
import mockFetchAssignmentSlow from "scripts/fetch-service/mocks/mockFetchAssignmentSlow";
import { BrowserRouter } from "react-router-dom";

// May need a browser router

export default {
  Default: (
    <BrowserRouter>
      <FormNewAssignment fetchScript={mockFetchAssignment} />
    </BrowserRouter>
  ),
  Error: (
    <BrowserRouter>
      <FormNewAssignment fetchScript={mockFetchError} />
    </BrowserRouter>
  ),
  "Takes a few seconds to submit": (
    <BrowserRouter>
      <FormNewAssignment fetchScript={mockFetchAssignmentSlow} />
    </BrowserRouter>
  ),
};
