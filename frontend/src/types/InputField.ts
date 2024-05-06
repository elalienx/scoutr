export default interface InputField {
  /** Determine the type of input field */
  type: "input-text" | "text-area";

  /** Acts as the Id of the input element so we can get the values using the FormData API.  */
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
