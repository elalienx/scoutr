// Project files
import InputField from "types/InputField";

const fields: InputField[] = [
  {
    id: "assignment_name",
    type: "input-text",
    label: "Assignment name",
    placeholder: "Graphic Designer",
    defaultValue: "GD",
    required: true,
  },
  {
    id: "company_name",
    type: "input-text",
    label: "Company",
    placeholder: "Spotify",
    defaultValue: "S",
    required: true,
  },
];

export default fields;
