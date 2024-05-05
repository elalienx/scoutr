// Node modules
import { Routes, Route } from "react-router-dom";

// Project files
import Dialog from "components/dialog/Dialog";
import useFetch from "hooks/useFetch";
import Assignments from "pages/assignments/Assignments";
import Candidates from "pages/candidates/Candidates";

export default function App() {
  // Pages
  const assigment = <Assignments fetchHook={useFetch} />;
  const candidates = <Candidates fetchHook={useFetch} />;

  return (
    <div id="app">
      <Routes>
        <Route path="/" element={assigment} />
        <Route path="/candidates/:assignment_id" element={candidates} />
      </Routes>
      <Dialog />
    </div>
  );
}
