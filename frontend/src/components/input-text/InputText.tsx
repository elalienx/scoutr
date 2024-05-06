// Project files
import InputField from "types/InputField";
import "styles/components/input-field.css";

/** Input control to allow a single line of text. */
export default function InputText(item: InputField) {
  const { name, label, placeholder, required = true, defaultValue } = item;

  return (
    <label className="input-field">
      <span className="label">{label}</span>
      <input
        className="input"
        defaultValue={defaultValue}
        name={name}
        placeholder={placeholder}
        required={required}
        type="text"
      />
    </label>
  );
}
