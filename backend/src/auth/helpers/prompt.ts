// Node modules
import { stdin as input, stdout as output } from "node:process";
import readline from "readline/promises";

export default async function prompt(query: string): Promise<string> {
  const line = readline.createInterface({ input, output });
  const answer = await line.question(query);
  line.close();

  return answer;
}
