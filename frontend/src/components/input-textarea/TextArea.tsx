// Project files
import InputField from "types/InputField";
import "styles/components/input-field.css";

/** Input control to allow multiple lines of text. */
export default function TextArea(item: InputField) {
  const { name, label, placeholder, required, defaultValue } = item;

  return (
    <label className="input-field">
      <span className="label">{label}</span>
      <textarea
        className="input"
        defaultValue={defaultValue}
        name={name}
        placeholder={placeholder}
        required={required}
        rows={10}
      ></textarea>
    </label>
  );
}
