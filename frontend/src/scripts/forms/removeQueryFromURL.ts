export default function removeQueryFromURL(url: string): string {
  // Safeguard
  if (url === "") return "";

  // Properties
  const parsedURL = new URL(url);

  parsedURL.search = "";

  return parsedURL.toString();
}
