export default function onPaste(
  event: React.ClipboardEvent<HTMLTextAreaElement>,
  action: Function,
  hasNewLineAfter = false
) {
  // Safeguard
  if (!event.clipboardData) return;

  // Properties
  const pastedText = event.clipboardData.getData("text");
  const modifiedText = action(pastedText);
  const textarea = event.target as HTMLTextAreaElement;
  const start = textarea.selectionStart;
  const end = textarea.selectionEnd;
  const wereToPaste: SelectionMode = "end";
  const addNewLineAfter = hasNewLineAfter ? "\n" : "";

  event.preventDefault();
  textarea.setRangeText(modifiedText + addNewLineAfter, start, end, wereToPaste);
}
