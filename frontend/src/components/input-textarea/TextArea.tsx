// Project files
import "styles/components/input-field.css";

interface Props {
  /** The unique name of this input element so we can get the values using the FormData API.  */
  name: string;

  /** The name of this field. */
  label: string;

  /** The example text to display when the field is empty. */
  placeholder: string;

  /** Determines if is an obligatory field. */
  required: boolean;

  /** The text the user writes in the field. */
  defaultValue: string;
}

/** Input control to allow multiple lines of text. */
export default function TextArea(item: Props) {
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
