// Node modules
import { RefObject } from "react";

// Project files
import "styles/components/input-field.css";

interface Props {
  /** The name of this field. */
  label: string;

  /** The example text to display when the field is empty. */
  placeholder: string;

  /** Determines if is an obligatory field. Defaults to true. */
  required?: boolean;

  /** The text the user writes in the field. */
  defaultValue: string;

  /** The reference to this component HTML element so we can read the value outside. */
  reference: RefObject<HTMLInputElement>;
}

/** Input control to allow a single line of text. */
export default function InputText(item: Props) {
  const { label, placeholder, required = true, defaultValue, reference } = item;

  return (
    <label className="input-field">
      <span className="label">{label}</span>
      <input
        className="input"
        defaultValue={defaultValue}
        placeholder={placeholder}
        ref={reference}
        required={required}
        type="text"
      />
    </label>
  );
}
