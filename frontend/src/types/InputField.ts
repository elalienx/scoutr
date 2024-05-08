export default interface InputField {
  /** The unique indentified the input element so we can get the values using the FormData API.  */
  id: string;

  /** Determine the type of input field */
  type: "input-text" | "text-area";

  /** The name of this field. */
  label: string;

  /** The example text to display when the field is empty. */
  placeholder: string;

  /** The text the user writes in the field. */
  defaultValue: string;

  /** Determines if is an obligatory field. Defaults to true. */
  required?: boolean;
}
