// Node modules
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Project files
import Dialog from "components/dialog/Dialog";
import useFetch from "hooks/useFetch";
import Assignments from "pages/assignments/Assignments";

export default function App() {
  // Components
  const pageAssignments = (
    <Assignments hook={() => useFetch("/api/assignments")} />
  );

  return (
    <BrowserRouter>
      <div id="app">
        <Routes>
          <Route path="/" element={pageAssignments} />
        </Routes>
        <Dialog children={null} />
      </div>
    </BrowserRouter>
  );
}
