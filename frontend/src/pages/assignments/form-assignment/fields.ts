// Project files
import InputField from "types/InputField";

const fields: InputField[] = [
  {
    type: "input-text",
    name: "assignment_name",
    label: "Assignment name",
    placeholder: "Graphic Designer",
    defaultValue: "",
    required: true,
  },
  {
    type: "input-text",
    name: "company_name",
    label: "Company",
    placeholder: "Spotify",
    defaultValue: "",
    required: true,
  },
];

export default fields;
