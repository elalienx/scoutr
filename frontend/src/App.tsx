// Project files
import Assignments from "pages/assignments/Assignments";
import useFetch from "hooks/useFetch";

export default function App() {
  return (
    <div>
      <Assignments customHook={() => useFetch("/api/assignments")} />
    </div>
  );
}
