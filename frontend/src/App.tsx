// Node modules
import { Routes, Route } from "react-router-dom";

// Project files
import useFetch from "hooks/useFetch";
import Assignments from "pages/assignments/Assignments";
import useDialog from "state/DialogContextAPI";
import Candidates from "pages/candidates/Candidates";

export default function App() {
  // Global state
  const { dialogRef, dialog } = useDialog();

  // Components
  const assigment = <Assignments hook={() => useFetch("/api/assignments")} />;
  const candidates = (
    <Candidates hook={() => useFetch("/api/candidates/:assignment_id")} />
  );

  return (
    <div id="app">
      <Routes>
        <Route path="/" element={assigment} />
        <Route path="/candidates/:assignment_id" element={candidates} />
      </Routes>
      <dialog ref={dialogRef}>{dialog}</dialog>
    </div>
  );
}
