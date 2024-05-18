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
    required: true,
  },
  {
    id: "relevance",
    type: "input-text",
    label: "Relevance",
    description: "Higher values denote greater candidate relevance.",
    placeholder: "",
    defaultValue: "",
    required: true,
  },
  {
    id: "contact_status",
    type: "input-text",
    label: "Contact status",
    description: "Values closer to 1, mean close to get hired.",
    placeholder: "",
    defaultValue: "",
    required: true,
  },
];

export default fields;
