// Project files
import InputField from "types/InputField";

const fields: InputField[] = [
  {
    id: "notes",
    type: "text-area",
    label: "Notes",
    description: "Maxium 300 characters.",
    placeholder:
      "Has worked for the 4 biggest consultant companies. Has multiple certification in latest technologies.",
    defaultValue: "",
    required: false,
  },
];

export default fields;
