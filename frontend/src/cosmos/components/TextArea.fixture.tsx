// Project files
import TextArea from "components/input-textarea/TextArea";
import removeQueryFromURL from "scripts/forms/removeQueryFromURL";

// Properties
const id = "unparsed-links";
const label = "Links";
const placeholder = `https://www.linkedin.com/in/susanna-vaara-0b33b03a/\nhttps://www.linkedin.com/in/farzad-golchin-1926461b/`;
const description = "Only paste links and delete any other type of text.";

function onPaste(event: React.ClipboardEvent<HTMLTextAreaElement>) {
  const pastedText = event.clipboardData.getData("text");
  const parsedURL = removeQueryFromURL(pastedText);
  const textarea = event.target as HTMLTextAreaElement;
  const start = textarea.selectionStart;
  const end = textarea.selectionEnd;

  event.preventDefault();
  textarea.setRangeText(parsedURL, start, end, "end");
}

export default {
  Default: (
    <TextArea
      id={id}
      type={"text-area"}
      label={label}
      placeholder={placeholder}
      defaultValue={""}
    />
  ),
  "Default with description": (
    <TextArea
      id={id}
      type={"text-area"}
      label={label}
      placeholder={placeholder}
      defaultValue={""}
      description={description}
    />
  ),
  Filled: (
    <TextArea
      id={id}
      type={"text-area"}
      label={label}
      placeholder={placeholder}
      defaultValue={"https://www.linkedin.com/in/eduardo-alvarez-nowak/"}
      description={description}
    />
  ),
  "Text area with paste": (
    <TextArea
      id={id}
      type={"text-area"}
      label={label}
      placeholder={""}
      defaultValue={
        "https://www.linkedin.com/in/hlinero/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BE%2FGq1NRFS2G5TZ%2FlmrpNQw%3D%3D"
      }
      description={description}
      options={{ onPaste: onPaste }}
    />
  ),
};
