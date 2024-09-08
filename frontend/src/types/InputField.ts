// Project files
import type InputRadioOptions from "./InputRadioOptions";
import type TextAreaOptions from "./TextAreaOptions";
import type TextOptions from "./TextOptions";

export default interface InputField {
  /** The unique indentified the input element so we can get the values using the FormData API.  */
  id: string;

  /** Determine the type of input field */
  type: "input-text" | "text-area" | "radio";

  /** The name of this field. */
  label: string;

  /** The example text to display when the field is empty. */
  placeholder: string;

  /** The text the user writes in the field and that is stored in the database. */
  defaultValue: string | number;

  /** Determines if is an obligatory field. Defaults to true. */
  required?: boolean;

  /** Additional instructiosn for the user. Example: The password must be minimun 8 character long. */
  description?: string;

  /** Additional options unique for each type of input */
  options?: TextOptions | TextAreaOptions | InputRadioOptions[];
}
