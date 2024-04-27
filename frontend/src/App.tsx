// Node modules
import { Routes, Route } from "react-router-dom";

// Project files
import useFetch from "hooks/useFetch";
import Assignments from "pages/assignments/Assignments";
import Dialog from "components/dialog/Dialog";

export default function App() {
  // Components
  const assignments = <Assignments hook={() => useFetch("/api/assignments")} />;

  return (
    <div id="app">
      <Routes>
        <Route path="/" element={assignments} />
      </Routes>
      <Dialog />
    </div>
  );
}
