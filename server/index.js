// Node modules
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

// Project files
import postgressClient from "./database/postgressClient.js";
import getCandidates from "./endpoints/getCandidates.js";
import postCandidate from "./endpoints/postCandidate.js";

// Properties
const port = 5000;
const app = express();

app.use(cors());
app.use(bodyParser.json());

// Endpoints
app.get("/candidates/all", (req, res) => getCandidates(res, postgressClient));
app.post("/candidates", (req, res) => postCandidate(req, res, postgressClient));

// Start server
app.listen(port, () => console.log(`Listening on port ${port}`));
