// Node modules
import { Routes, Route } from "react-router-dom";

// Project files
import Dialog from "components/dialog/Dialog";
import useFetch from "scripts/fetch-hook/useFetch";
import Assignments from "pages/assignments/Assignments";
import Candidates from "pages/candidates/Candidates";
import Page404 from "pages/page404/Page404";

export default function App() {
  // Pages
  const assigment = <Assignments fetchHook={useFetch} />;
  const candidates = <Candidates fetchHook={useFetch} />;
  const pageNotFound = <Page404 />;

  return (
    <div id="app">
      <Routes>
        <Route path="/" element={assigment} />
        <Route path="/candidates/:assignment_id" element={candidates} />
        <Route path="*" element={pageNotFound} />
      </Routes>
      <Dialog />
    </div>
  );
}
