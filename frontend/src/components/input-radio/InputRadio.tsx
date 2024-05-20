// Project files
import InputField from "types/InputField";
import FormStatus from "components/form-status/FormStatus";
import Radio from "./Radio";
import "styles/components/input-field.css";
import InputRadioOptions from "types/InputRadioOptions";

export default function InputRadio(item: InputField) {
  const { id, label, defaultValue, description, options } = item;

  const myOptions = (options as InputRadioOptions[]) || [];

  // Safeguard
  if (myOptions.length === 0)
    return <FormStatus status="error" message="No options available for this input type radio" />;

  // Components
  const Options = myOptions.map((item) => (
    <Radio key={item.value} id={id} {...item} defaultValue={Number(defaultValue)} />
  ));

  return (
    <label className="input-field" data-testid="input-radio">
      <span className="label">{label}</span>
      {description && <small className="description">{description}</small>}
      <div className="radio-options">{Options}</div>
    </label>
  );
}
