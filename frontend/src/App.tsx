// Project files
import Assignments from "pages/assignments/Assignments";
import useFetch from "hooks/useFetch";
import useFetchMock from "mocks/useFetchMock";

export default function App() {
  // useFetchMock(www.error.com);
  // useFetch("/api/assignments", [])

  return (
    <div>
      <Assignments customHook={() => useFetch("/api/assignments")} />
    </div>
  );
}
