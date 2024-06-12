// Node modules
import { useState, useEffect } from "react";

// Project files
import type ResultsAPI from "types/ResultAPI";
import type StatusPage from "types/StatusPage";

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
      const data = await response.json();
      const status: StatusPage = "ready";
      const message = "All good";

      setResult({ data, status, message });
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : "unknow error";

      console.error(error);
      setResult({ data: [], status: "error", message });
    }
  }

  return result;
}
