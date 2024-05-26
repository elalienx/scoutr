// Project files
import type InputField from "types/InputField";
import type TextAreaOptions from "types/TextAreaOptions";
import "styles/components/input-field.css";

/** Input control to allow multiple lines of text. */
export default function TextArea(item: InputField) {
  const { id, label, placeholder, required = true, defaultValue, description, options } = item;

  // Properties
  const myOptions = options as TextAreaOptions;

  return (
    <label className="input-field" data-testid="text-area">
      <span className="label">{label}</span>
      {description && <small className="description">{description}</small>}
      <textarea
        aria-label={id}
        className="input"
        defaultValue={defaultValue}
        name={id}
        placeholder={placeholder}
        required={required}
        rows={8}
        maxLength={myOptions?.maxLength}
      />
    </label>
  );
}
