// Project files
import InputField from "types/InputField";

const fields: InputField[] = [
  {
    id: "assignment_name",
    type: "input-text",
    label: "Assignment name",
    placeholder: "Graphic Designer",
    defaultValue: "",
    required: true,
  },
  {
    id: "company_name",
    type: "input-text",
    label: "Company",
    placeholder: "Spotify",
    defaultValue: "",
    required: true,
  },
];

export default fields;
