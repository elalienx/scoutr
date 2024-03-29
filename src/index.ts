// Node modules
import express from "express";

// Node modules
import postgresClient from "./database/postgresClient";

// Project files
import { credentials } from "./database/credentials";

// Properties
const app = express();
const client = postgresClient(credentials);
const port = 8000;

// Start server
app.use(express.json());
app.listen(port, () => console.info(`Scoutr server ready on port ${port} V3`));
