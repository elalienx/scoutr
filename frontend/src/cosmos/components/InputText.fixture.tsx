// Project files
import InputText from "components/input-text/InputText";

// Properties
const id = "candidate-name";
const label = "Name";
const placeholder = "Jhon Doe";

export default {
  Default: (
    <InputText
      id={id}
      type={"input-text"}
      label={label}
      placeholder={placeholder}
      defaultValue={""}
    />
  ),
  Filled: (
    <InputText
      id={id}
      type={"input-text"}
      label={label}
      placeholder={placeholder}
      defaultValue={"Eduardo Alvarez"}
    />
  ),
};
