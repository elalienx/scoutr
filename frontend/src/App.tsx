// Node modules
import { Routes, Route, useSearchParams } from "react-router-dom";

// Project files
import Dialog from "components/dialog/Dialog";
import useFetch from "hooks/useFetch";
import Assignments from "pages/assignments/Assignments";
import FormAssignment from "pages/assignments/helpers/FormAssignment";

export default function App() {
  // Global state
  const [params] = useSearchParams({ dialog: "" });

  // Properties (hardcoded)
  const dialog = params.get("dialog") === "new-assignment" && (
    <FormAssignment />
  );

  // Components
  const pageAssignments = (
    <Assignments hook={() => useFetch("/api/assignments")} />
  );

  return (
    <div id="app">
      <Dialog children={dialog} />
      <Routes>
        <Route path="/" element={pageAssignments} />
      </Routes>
    </div>
  );
}
