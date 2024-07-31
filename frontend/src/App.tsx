// Node modules
import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

// Project files
import Dialog from "components/dialog/Dialog";
import useFetch from "scripts/fetch-hook/useFetch";

// Dynamic imports to improve loading speed
const Assignments = lazy(() => import("pages/assignments/Assignments"));
const Candidates = lazy(() => import("pages/candidates/Candidates"));
const Page404 = lazy(() => import("pages/page-404/Page404"));

export default function App() {
  // Pages
  const assigments = <Assignments fetchHook={useFetch} />;
  const candidates = <Candidates fetchHook={useFetch} />;
  const pageNotFound = <Page404 />;

  // Components
  const Loading = <small>⏰ Loading...</small>;

  return (
    <div id="app">
      <Suspense fallback={Loading}>
        <Routes>
          <Route path="/" element={assigments} />
          <Route path="/candidates/:assignment_id" element={candidates} />
          <Route path="*" element={pageNotFound} />
        </Routes>
      </Suspense>
      <Dialog />
    </div>
  );
}
