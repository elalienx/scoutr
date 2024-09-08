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
      defaultValue={""}
      label={label}
      placeholder={placeholder}
      type={"input-text"}
    />
  ),
  Filled: (
    <InputText
      id={id}
      defaultValue={"Eduardo Alvarez"}
      label={label}
      placeholder={placeholder}
      type={"input-text"}
    />
  ),
  Password: (
    <InputText
      id={id}
      defaultValue={""}
      description="Should show asterisks"
      label={"Password"}
      options={{ type: "password" }}
      placeholder={"********"}
      type={"input-text"}
    />
  ),
};
