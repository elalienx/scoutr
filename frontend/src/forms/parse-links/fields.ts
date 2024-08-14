// Project fields
import onPaste from "components/input-textarea/helpers/onPasteLinks";
import type InputField from "types/InputField";

const fields: InputField[] = [
  {
    id: "unparsed_links",
    type: "text-area",
    label: "Paste one or more LinkedIn links here",
    placeholder:
      "https://www.linkedin.com/in/eduardo-alvarez-nowak/\nhttps://www.linkedin.com/in/lanahaddad87/",
    defaultValue: "",
    required: true,
    description: "Only paste links and delete any other type of text.",
    options: {
      onPaste: onPaste,
    },
  },
];

export default fields;
