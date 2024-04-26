// Node modules
import useFetchMock from "mocks/useFetchMock";
import Assignments from "pages/assignments/Assignments";
import { useEffect, useState } from "react";
import Status from "types/Status";

// Project files

export default function App() {
  const [data, setData] = useState([]);
  const [status, setStatus] = useState<Status>("loading");

  // Properties
  const endpoint = "/api";

  // Methods
  useEffect(() => {
    fetch(endpoint + "/assignments")
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        const data = result.data;
        setStatus("content");
        setData(data);
      })
      .catch((error) => {
        console.error(error);
        setStatus("error");
      });
  }, []);

  return (
    <div>
      <Assignments customHook={useFetchMock("www.empty.com")} />
    </div>
  );
}
