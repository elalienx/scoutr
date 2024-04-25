// Node modules
import { useEffect, useState } from "react";

// Project files
import "./App.css";

export default function App() {
  const [data, setData] = useState([]);
  const [status, setStatus] = useState(0); // 0 loading, 1 loaded, 2 ready

  // Properties
  const endpoint = "/api";

  // Methods
  useEffect(() => {
    fetch(endpoint + "/assignments")
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        setStatus(1);
        setData(result.data);
      })
      .catch((error) => {
        console.error("useEffect() error:", error.message);
        setStatus(2);
      });
  }, []);

  // Components
  const Assignments = data.map((item: any) => (
    <li key={item.id}>
      #{item.id} - {item.assignment_name}
    </li>
  ));

  // Safeguards
  if (status === 0) return <p>🕒 Loading...</p>;
  if (status === 2) return <p>🚨 Error!</p>;

  return (
    <div>
      <h1>Setting up FE enviroment 2</h1>
      <ul>{Assignments}</ul>
    </div>
  );
}
