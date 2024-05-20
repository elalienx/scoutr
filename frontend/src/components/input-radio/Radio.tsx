// Project files
import "./radio.css";

interface Props {
  /** The unique identifier shared by all radio buttons that belong to a single group. */
  id: string;

  /** The text to diplay to the user. */
  name: string;

  /** The value that will be saved to the database. */
  value: number;

  /** Decides if this input radio is the one selected by the user. */
  checked: boolean;
}

/** The individual piece to create larger Input Radio components to allow users to choose 1 option out of many. */
export default function Radio(item: Props) {
  const { id, name, value, checked } = item;

  // Properties
  const cssChecked = checked ? "child-is-checked" : "";

  return (
    <label className={`radio ${cssChecked}`}>
      <input type="radio" value={value} name={id} />
      {name}
    </label>
  );
}
