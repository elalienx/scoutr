// Node modules
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

// Project files
import LoaderSuspense from "components/loader-suspense/LoaderSuspense";
import useFetch from "scripts/fetch/useFetch";

// Dynamic imports to improve loading speed
const Assignments = lazy(() => import("pages/assignments/Assignments"));
const Candidates = lazy(() => import("pages/candidates/Candidates"));
const Page404 = lazy(() => import("pages/page-404/Page404"));
const Logout = lazy(() => import("pages/logout/Logout"));

export default function LoggedRoutes() {
  // Pages
  const assigments = <Assignments fetchHook={useFetch} />;
  const candidates = <Candidates fetchHook={useFetch} />;
  const pageNotFound = <Page404 />;
  const logout = <Logout />;

  return (
    <Suspense fallback={<LoaderSuspense />}>
      <Routes>
        <Route path="/" element={assigments} />
        <Route path="/candidates/:assignment_id" element={candidates} />
        <Route path="/logout" element={logout} />
        <Route path="*" element={pageNotFound} />
      </Routes>
    </Suspense>
  );
}
