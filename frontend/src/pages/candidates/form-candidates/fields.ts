// Project fields
import InputField from "types/InputField";

const fields: InputField[] = [
  {
    id: "unparsed_links",
    type: "text-area",
    label: "Paste the LinkedIn links here",
    placeholder:
      "https://www.linkedin.com/in/eduardo-alvarez-nowak/\nhttps://www.linkedin.com/in/lanahaddad87/\nhttps://www.linkedin.com/in/susanna-vaara-0b33b03a/",
    defaultValue: "",
    required: true,
    description: "Only paste links and delete any other type of text.",
  },
];

export default fields;
