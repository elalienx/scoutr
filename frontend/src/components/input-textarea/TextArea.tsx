// Project files
import InputField from "types/InputField";
import "styles/components/input-field.css";

/** Input control to allow multiple lines of text. */
export default function TextArea(item: InputField) {
  const { id, label, placeholder, required = true, value, description } = item;

  return (
    <label className="input-field" data-testid="text-area">
      <span className="label">{label}</span>
      {description && <small className="description">{description}</small>}
      <textarea
        aria-label={id}
        className="input"
        value={value}
        name={id}
        placeholder={placeholder}
        required={required}
        rows={8}
      />
    </label>
  );
}
