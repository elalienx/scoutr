// Project files
import "styles/components/input-field.css";

interface Props {
  /** The unique name of this input element so we can get the values using the FormData API.  */
  name: string;

  /** The name of this field. */
  label: string;

  /** The example text to display when the field is empty. */
  placeholder: string;

  /** Determines if is an obligatory field. Defaults to true. */
  required?: boolean;

  /** The text the user writes in the field. */
  defaultValue: string;
}

/** Input control to allow a single line of text. */
export default function InputText(item: Props) {
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
