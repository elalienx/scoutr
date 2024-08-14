// Project files
import removeQueryFromURL from "./removeQueryFromURL";

export default function onPaste(event: React.ClipboardEvent<HTMLTextAreaElement>) {
  const pastedText = event.clipboardData.getData("text");
  const parsedURL = removeQueryFromURL(pastedText);
  const textarea = event.target as HTMLTextAreaElement;
  const start = textarea.selectionStart;
  const end = textarea.selectionEnd;

  event.preventDefault();
  textarea.setRangeText(parsedURL, start, end, "end");
}
