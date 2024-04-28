// Node modules
import { RefObject, useRef } from "react";

// Project files
import "styles/components/input-field.css";

interface Props {
  /** The name of this field. */
  label: string;

  /** The example text to display when the field is empty. */
  placeholder: string;

  /** Determines if is an obligatory field. */
  required: boolean;

  /** The text the user writes in the field. */
  defaultValue: string;

  /** The reference to this component HTML element so we can read the value outside. */
  reference: RefObject<HTMLTextAreaElement>;
}

/** Input control to allow multiple lines of text. */
export default function TextArea(item: Props) {
  const { label, placeholder, required, defaultValue, reference } = item;

  return (
    <label className="input-field">
      <span className="label">{label}</span>
      <textarea
        className="input"
        rows={10}
        placeholder={placeholder}
        required={required}
        ref={reference}
        defaultValue={defaultValue}
      ></textarea>
    </label>
  );
}
