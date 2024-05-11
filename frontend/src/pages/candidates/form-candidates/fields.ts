// Project fields
import InputField from "types/InputField";

const fields: InputField[] = [
  {
    id: "unparsed_links",
    type: "text-area",
    label: "Paste the LinkedIn links here",
    placeholder: "www.linkedin.com/in/eduardo-alvarez-nowak",
    defaultValue: "",
    required: true,
    description: "Only paste links and delete any other type of text.",
  },
];

export default fields;
