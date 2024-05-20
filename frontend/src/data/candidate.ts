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
    value: "",
    required: false,
  },
  {
    id: "relevance",
    type: "radio",
    label: "Relevance",
    placeholder: "",
    value: "",
    options: [
      { name: "Remove relevance", value: 0 },
      { name: "Not relevant", value: 1 },
      { name: "Too junior", value: 2 },
      { name: "Maybe", value: 3 },
      { name: "Yes", value: 4 },
      { name: "Super yes", value: 5 },
    ],
  },
];

export default fields;
