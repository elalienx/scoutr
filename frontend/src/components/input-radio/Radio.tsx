// Project files
import "./radio.css";

interface Props {
  /** The unique identifier shared by all radio buttons that belong to a single group. */
  id: string;

  /** The text to diplay to the user. */
  name: string;

  /** The value that will be saved to the database. */
  value: number;

  /** The value the user has selected, we sent it to vertify if this is the active radio. */
  defaultValue: number;
}

/** The individual piece to create larger Input Radio components to allow users to choose 1 option out of many. */
export default function Radio(item: Props) {
  const { id, name, value, defaultValue } = item;

  return (
    <label className="radio">
      <input type="radio" value={value} name={id} defaultChecked={value === defaultValue} />
      {name}
    </label>
  );
}
