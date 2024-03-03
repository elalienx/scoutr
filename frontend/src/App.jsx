// Node modules
import { useState, useEffect } from "react";

// Project files
import "./styles/style.css";

export default function App() {
  // Local state
  const [data, setData] = useState([]);
  const [name, setName] = useState("Alexia Alvarez");
  const [jobTitle, setJobTitle] = useState("Architect");
  const [links, setLinks] = useState(
    "https://www.linkedin.com/in/eduardo-alvarez-nowak/"
  );
  const [status, setStatus] = useState(0); // 0 loading, 1 ready, 2 error

  // Properties
  const endpoint = "/api"; // 🔔 IMPORTANT: We will use nginx to redirect it to the proper URL

  // Methods
  useEffect(() => {
    fetch(endpoint + "/candidates/all")
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

  async function onSubmitCandidate(event) {
    event.preventDefault();

    const item = {
      candidate: { candidate_name: name, candidate_job_title: jobTitle },
    };
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(item),
    };

    console.log("onSubmitCandidate() options", options);
    await fetch(endpoint + "/candidates", options);
    setData([...data, { candidate_name: name, candidate_job_title: jobTitle }]);
    setName("");
    setJobTitle("");
  }

  async function onSubmitLinks(event) {
    event.preventDefault();

    const textAreaToArray = links.split("\n");
    const item = {
      links: textAreaToArray,
    };
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(item),
    };

    console.log("onSubmitLinks() options", options);
    await fetch(endpoint + "/parse_links", options);
    setLinks("");
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
      <h1 className="title">Candidates 13</h1>
      {Items}
      <hr />

      {/* Form add candidate */}
      <form className="form" onSubmit={(event) => onSubmitCandidate(event)}>
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
        <button>Submit candidate</button>
      </form>
      <hr />

      {/* Form parse links */}
      <form className="form" onSubmit={(event) => onSubmitLinks(event)}>
        <label>Paste LinkedIn links here:</label>
        <br />
        <textarea
          cols={50}
          rows={10}
          value={links}
          required
          onChange={(event) => setLinks(event.target.value)}
        />
        <br />
        <button>Submit links</button>
      </form>
    </div>
  );
}
