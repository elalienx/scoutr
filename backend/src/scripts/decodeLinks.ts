export default function decodeLinks(query: string): string[] {
  // Safeguard
  if (!query) throw new Error("The query received was empty");

  const result = query.split(",");

  return result;
}
