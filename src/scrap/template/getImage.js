export default function getImage(document, selector) {
  const placeholderURL = "https://static.licdn.com/";
  let imageURL = document(selector).attr("src") || "";

  // safeguard
  if (imageURL.startsWith(placeholderURL)) imageURL = "";

  return imageURL;
}
