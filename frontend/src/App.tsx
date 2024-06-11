// Node modules
import { Routes, Route } from "react-router-dom";

// Project files
import Dialog from "components/dialog/Dialog";
import Assignments from "pages/assignments/Assignments";
import Candidates from "pages/candidates/Candidates";
import Page404 from "pages/page-404/Page404";
import useFetch from "scripts/fetch-hook/useFetch";

export default function App() {
  // Pages (with fetch hook as prop for easy testing)
  const assigments = <Assignments fetchHook={useFetch} />;
  const candidates = <Candidates fetchHook={useFetch} />;
  const pageNotFound = <Page404 />;

  return (
    <div id="app">
      <Routes>
        <Route path="/" element={assigments} />
        <Route path="/candidates/:assignment_id" element={candidates} />
        <Route path="*" element={pageNotFound} />
      </Routes>
      <Dialog />
    </div>
  );
}
