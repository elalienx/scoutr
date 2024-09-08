// Project files
import InputField from "types/InputField";

const fields: InputField[] = [
  {
    id: "email",
    type: "input-text",
    label: "Novare Email",
    placeholder: "employee@novare.se",
    defaultValue: "eduardo.alvarez@novare.se",
    required: true,
  },
  {
    id: "password",
    type: "input-text",
    label: "password",
    placeholder: "********",
    defaultValue: "1234567",
    required: true,
  },
];

export default fields;
