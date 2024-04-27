// Node modules
import { Routes, Route } from "react-router-dom";

// Project files
import useFetch from "hooks/useFetch";
import Assignments from "pages/assignments/Assignments";
import useDialog from "state/DialogContextAPI";

export default function App() {
  // Global state
  const { dialogRef, dialog } = useDialog();

  // Components
  const assignments = <Assignments hook={() => useFetch("/api/assignments")} />;

  return (
    <div id="app">
      <Routes>
        <Route path="/" element={assignments} />
      </Routes>
      <dialog ref={dialogRef}>{dialog}</dialog>
    </div>
  );
}
