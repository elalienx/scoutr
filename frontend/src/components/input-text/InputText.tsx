// Project files
import type InputField from "types/InputField";
import type TextOptions from "types/TextOptions";
import "styles/components/input-field.css";

/** Input control to allow a single line of text. */
export default function InputText(item: InputField) {
  const { id, label, placeholder, required = true, defaultValue, description, options } = item;

  // Properties
  const textAreaOptions = options as TextOptions;
  const type = textAreaOptions?.type || "text";

  return (
    <label className="input-field" data-testid="input-text">
      <span className="label">{label}</span>
      {description && <small className="description">{description}</small>}
      <input
        aria-label={id}
        className="input"
        defaultValue={defaultValue}
        name={id}
        placeholder={placeholder}
        required={required}
        type={type}
      />
    </label>
  );
}
