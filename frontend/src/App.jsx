// Node modules
import { useState, useEffect } from "react";

// Project files
import "./styles/style.css";

export default function App() {
  // Local state
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [status, setStatus] = useState(0); // 0 loading, 1 ready, 2 error

  // Properties
  const endpoint = "/api/candidates"; // 🔔 IMPORTANT: We will use nginx to redirect it to the proper URL

  // Methods
  useEffect(() => {
    fetch(`${endpoint}/all`)
      .then((response) => response.json())
      .then((result) => onSucess(result))
      .catch((error) => onFailure(error));
  }, []);

  function onSucess(result) {
    setData(result.rows);
    setStatus(1);
  }

  function onFailure(error) {
    setStatus(2);
  }

  async function onSubmit(event) {
    event.preventDefault();

    const item = {
      candidate: { candidate_name: name, candidate_job_title: jobTitle },
    };
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(item),
    };

    await fetch(endpoint, options);
    setData([...data, { candidate_name: name, candidate_job_title: jobTitle }]);
    setName("");
    setJobTitle("");
  }

  // Components
  const Items = data.map((item, index) => (
    <div key={index} className="item">
      🧑 {item.candidate_name}, 💼 {item.candidate_job_title}
    </div>
  ));

  // Safeguards
  if (status === 0) return <p>🕒 Loading...</p>;
  if (status === 2) return <p>❌ Error</p>;

  return (
    <div className="App">
      <h1 className="title">Candidates 12</h1>
      {Items}
      <hr />
      <form className="form" onSubmit={(event) => onSubmit(event)}>
        <label>Register new candidate:</label>
        <input
          type="text"
          placeholder="Eduardo Alvarez"
          value={name}
          required
          onChange={(event) => setName(event.target.value)}
        />
        <input
          type="text"
          placeholder="Senior Frontend Developer"
          value={jobTitle}
          required
          onChange={(event) => setJobTitle(event.target.value)}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}
