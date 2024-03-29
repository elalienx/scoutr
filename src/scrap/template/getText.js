export default function getText(document, selector) {
  return document(selector).first().text().trim();
}
