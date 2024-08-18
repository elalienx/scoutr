/**
 * Forces the received links from the frontend to be arrays.
 * This is neccesary as Express.js converts 1 item array into a single string.
 *
 * Example 1 (normal):
 *  - Frontend = ["www.eduardo.com", "www.alexia.com"] // sends an array with 2 strings
 *  - Backend = ["www.eduardo.com", "www.alexia.com"] // receives the same array with 2 strings
 *
 * Example 2 (the problem):
 * - Frontend = ["www.eduardo.com"] // sends an array with 1 string
 * - Backend  = "www.eduardo.com" // Express.js wrongfully converts it to string
 *
 */
export default function unZipLinks(links: string | string[]): string[] {
  // Safeguard
  if (links === "") throw new Error("The query is empty");

  // Properties
  const result = Array.isArray(links) ? links : [links];

  return result;
}
