// Project files
import InputField from "types/InputField";

const fields: InputField[] = [
  {
    id: "notes",
    type: "text-area",
    label: "Notes",
    description: "Maxium 200 characters.",
    placeholder:
      "Has worked for the 4 biggest consultant companies. Has multiple certification in latest technologies.",
    defaultValue: "",
    required: false,
    options: {
      maxLength: 200,
    },
  },
  {
    id: "relevance",
    type: "radio",
    label: "Relevance",
    placeholder: "",
    required: true,
    defaultValue: 0,
    description: "Higher valus means a more valuable candidate.",
    options: [
      { name: "Remove relevance", value: 0 },
      { name: "Not relevant", value: 1 },
      { name: "Too junior", value: 2 },
      { name: "Maybe", value: 3 },
      { name: "Yes", value: 4 },
      { name: "Super yes", value: 5 },
    ],
  },
  {
    id: "contact_status",
    type: "radio",
    label: "Contact",
    placeholder: "",
    required: true,
    defaultValue: 0,
    description: "Lower values mean the candidate is closer to getting hired.",
    options: [
      { name: "Remove contact", value: 0 },
      { name: "Interviewed", value: 1 },
      { name: "Scheduled", value: 2 },
      { name: "Talking", value: 3 },
      { name: "Declined", value: 4 },
      { name: "Contacted", value: 5 },
    ],
  },
];

export default fields;
