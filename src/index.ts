// Node modules
import initializePool from "./database/initializeDatabase";

// Project files
import { credentials } from "./database/credentials";

// Properties
const client = initializePool(credentials);

console.log("Scoutr V3");
