// Node modules
import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

// Project files
import Dialog from "components/dialog/Dialog";
import useFetch from "scripts/fetch-hook/useFetch";

// Dynamically load routes on demmand
const Assignments = React.lazy(() => import("./pages/assignments/Assignments"));
const Candidates = React.lazy(() => import("./pages/candidates/Candidates"));
const Page404 = React.lazy(() => import("./pages/page-404/Page404"));

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
