export default function unZipLinks(links: string | string[]): string[] {
  // Safeguard
  if (links === "") throw new Error("The query received was empty");

  // Properties
  const result = Array.isArray(links) ? links : [links];

  return result;
}
