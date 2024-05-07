// Project fields
import InputField from "types/InputField";

const fields: InputField[] = [
  {
    type: "text-area",
    name: "unparsed_links",
    label: "Paste the LinkedIn links here",
    placeholder: "www.linkedin.com/in/eduardo-alvarez-nowak",
    defaultValue: "",
    required: true,
  },
];

export default fields;
