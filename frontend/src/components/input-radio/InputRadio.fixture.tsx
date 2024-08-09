// Project files
import InputRadio from "./InputRadio";

// Properties
const options = [
  { name: "Remove relevance", value: 0 },
  { name: "Not relevant", value: 1 },
  { name: "Too junior", value: 2 },
  { name: "Maybe", value: 3 },
  { name: "Yes", value: 4 },
  { name: "Super yes", value: 5 },
];

export default {
  Default: (
    <InputRadio
      id="relevance"
      type="radio"
      label="Relevance"
      placeholder=""
      defaultValue={1}
      description="Higher valus means a more valuable candidate."
      options={options}
    />
  ),
};
