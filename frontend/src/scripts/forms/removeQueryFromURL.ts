export default function removeQueryFromURL(url: string): string {
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
