// Project files
import removeQueryFromURL from "../../../scripts/forms/removeQueryFromURL";

export default function onPasteLinks(event: ClipboardEvent) {
  // Safeguard
  if (!event.clipboardData) return;

  // Properties
  const pastedText = event.clipboardData.getData("text");
  const parsedURL = removeQueryFromURL(pastedText);
  const addNewLineAfter = "\n";
  const textarea = event.target as HTMLTextAreaElement;
  const start = textarea.selectionStart;
  const end = textarea.selectionEnd;

  event.preventDefault();
  textarea.setRangeText(parsedURL + addNewLineAfter, start, end, "end");
}
