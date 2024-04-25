// Node modules
import { useRef } from "react";

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
}

/** Input control to allow multiple lines of text. */
export default function InputText(item: Props) {
  const { label, placeholder, required, defaultValue } = item;

  // Local state
  const inputRef = useRef<HTMLTextAreaElement>(null);

  return (
    <label className="input-field">
      <span className="label">{label}</span>
      <textarea
        className="input"
        rows={10}
        placeholder={placeholder}
        required={required}
        ref={inputRef}
        defaultValue={defaultValue}
      ></textarea>
    </label>
  );
}
