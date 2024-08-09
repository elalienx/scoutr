// Project files
import TextArea from "./TextArea";

// Properties
const id = "unparsed-links";
const label = "Links";
const placeholder = `https://www.linkedin.com/in/susanna-vaara-0b33b03a/\nhttps://www.linkedin.com/in/farzad-golchin-1926461b/`;
const description = "Only paste links and delete any other type of text.";

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
};
