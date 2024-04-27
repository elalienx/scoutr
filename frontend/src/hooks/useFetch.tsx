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

    fetchData(url);
  }, [url]);

  return { data, status, message };
}
