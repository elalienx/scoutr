export default function unZipLinks(query: string | string[]): string[] {
  // Safeguard
  if (query === "") throw new Error("The query received was empty");

  let result = [];

  if (!Array.isArray(query)) result = [query];
  else result = query;

  return result;
}
