export default function removeQueryFromURL(url: string): string {
  // Safeguard
  if (url === "") return "";

  // Properties
  let result = "";

  try {
    const parsedURL = new URL(url);

    parsedURL.search = "";
    result = parsedURL.toString();
  } catch (error) {
    result = url;
  }

  return result;
}
