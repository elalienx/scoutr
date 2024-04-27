// Node modules
import { Routes, Route } from "react-router-dom";

// Project files
import useFetch from "hooks/useFetch";
import Assignments from "pages/assignments/Assignments";
import FormAssignment from "pages/assignments/helpers/FormAssignment";

export default function App() {
  // Components
  const pageAssignments = (
    <Assignments hook={() => useFetch("/api/assignments")} />
  );

  return (
    <div id="app">
      <Routes>
        <Route path="/" element={pageAssignments} />
      </Routes>
      <dialog>{dialog}</dialog>
    </div>
  );
}
