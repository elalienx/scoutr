// Node modules
import pkg from "pg";

// Project files
import keys from "./keys.js";
import candidates from "./schemas/candidates.js";

// Properties
const { Pool } = pkg;
const postgressClient = new Pool({
  user: keys.pgUser,
  host: keys.pgHost,
  database: keys.pgDatabase,
  password: keys.pgPassword,
  port: keys.pgPort,
});

postgressClient.on("connect", createClient(client));

// Methods
function createClient(client) {
  client
    .query(`CREATE TABLE IF NOT EXISTS candidates (${candidates})`)
    .catch((error) => console.log("PG ERROR", error));
}

export default postgressClient;
