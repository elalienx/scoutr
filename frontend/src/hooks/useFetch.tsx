// Node modules
import { useState, useEffect } from "react";
import ResultsAPI from "types/ResultsAPI";

// Project files
import Status from "types/Status";

export default function useFetch(uri: string): ResultsAPI {
  // Initial values
  const init: ResultsAPI = { data: [], status: "loading", message: "" };
  const badURI: ResultsAPI = { ...init, message: "URI is empty" };

  // Local state
  const [result, setResult] = useState<ResultsAPI>(init);

  // Safeguard
  if (uri === "") return badURI;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(uri);
        const { data, message } = await response.json();
        const status: Status = data.length ? "ready" : "empty";

        setResult({ data, status, message });
      } catch (error: unknown) {
        const message = error instanceof Error ? error.message : "unknow error";

        console.error(error);
        setResult({ data: [], status: "error", message });
      }
    };

    fetchData();
  }, [uri]);

  return result;
}
