// Node modules
import { useState, useEffect } from "react";
import ResultsAPI from "types/ResultsAPI";

// Project files
import Status from "types/Status";

export default function useFetch(uri: string): ResultsAPI {
  // Safeguard
  if (uri === "") return { data: [], status: "error", message: "Bad uri" };

  // Initial values
  const init: ResultsAPI = { data: [], status: "loading", message: "" };

  // Local state
  const [result, setResult] = useState<ResultsAPI>(init);

  // Methods
  useEffect(() => {
    fetchData();
  }, [uri]);

  async function fetchData() {
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
  }

  return result;
}
