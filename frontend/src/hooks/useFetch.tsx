// Node modules
import { useState, useEffect } from "react";
import ResultsAPI from "types/ResultsAPI";

// Project files
import Status from "types/Status";

export default function useFetch(uri: string): ResultsAPI {
  // Local state
  const [data, setData] = useState([]);
  const [status, setStatus] = useState<Status>("loading");
  const [message, setMessage] = useState("");

  // Safeguard
  if (uri === "") return { data, status: "error", message: `URI is empty` };

  useEffect(() => {
    const fetchData = async (url: string) => {
      try {
        const response = await fetch(url);
        // safeguard
        if (!response.ok) throw new Error();

        const result = await response.json();

        setData(result.data);
        setStatus("ready");
      } catch (error: unknown) {
        console.error(error);
        if (error instanceof Error) setMessage(error.message);
        setStatus("error");
      }
    };

    fetchData(uri);
  }, [uri]);

  return { data, status, message };
}
