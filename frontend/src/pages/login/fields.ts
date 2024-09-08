// Project files
import InputField from "types/InputField";

const fields: InputField[] = [
  {
    id: "email",
    type: "input-text",
    label: "Novare Email",
    placeholder: "employee@novare.se",
    defaultValue: "",
    required: true,
  },
  {
    id: "password",
    type: "input-text",
    label: "password",
    placeholder: "********",
    defaultValue: "",
    required: true,
  },
];

export default fields;
