// Project files
import TextArea from "components/input-textarea/TextArea";

// Properties
const id = "unparsed-links";
const label = "Links";
const placeholder = `https://www.linkedin.com/in/susanna-vaara-0b33b03a/\nhttps://www.linkedin.com/in/farzad-golchin-1926461b/`;
const description = "Only paste links and delete any other type of text.";

// Methods
function makeUppercase(text: string): string {
  return String(text).toUpperCase();
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
  "Modifies text on paste": (
    <TextArea
      id={id}
      type={"text-area"}
      label={label}
      placeholder={""}
      defaultValue={""}
      description={
        "Pasting any text here will become upperscase. Typing manually will not affect this."
      }
      options={{ onPaste: makeUppercase }}
    />
  ),
};
