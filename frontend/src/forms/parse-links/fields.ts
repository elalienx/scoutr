// Project fields
import removeQueryFromURL from "scripts/forms/removeQueryFromURL";
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
      onPaste: removeQueryFromURL,
      addNewLineAfterPaste: true,
    },
  },
];

export default fields;
