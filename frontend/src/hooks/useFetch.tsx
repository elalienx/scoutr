// Node modules
import { useState, useEffect } from "react";

// Project files
import Status from "types/Status";

export default function useFetch(url: string, initialState: unknown = []) {
  console.log("useFetch() 🌎", url);

  const [data, setData] = useState(initialState);
  const [status, setStatus] = useState<Status>("loading");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchData = async (url: string) => {
      console.log("fetchData() url", url);

      try {
        const response = await fetch(url);
        console.log("try response", response);
        // safeguard
        if (!response.ok) throw new Error();

        const result = await response.json();
        console.log(result);

        setData(result.data);
        setStatus("ready");
      } catch (error: unknown) {
        console.error(error);
        if (error instanceof Error) setMessage(error.message);
        setStatus("error");
      }
    };

    fetchData(url); // Immediately fetch data
  }, [url]);

  return { data, status, message };
}