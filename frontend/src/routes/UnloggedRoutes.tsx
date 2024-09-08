// Node modules
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

// Project files
import LoaderSuspense from "components/loader-suspense/LoaderSuspense";
import Login from "pages/login/Login";

export default function UnloggedRoutes() {
  return (
    <Suspense fallback={<LoaderSuspense />}>
      <Routes>
        <Route path="*" element={<Login />} />
      </Routes>
    </Suspense>
  );
}
