// Project files
import InputField from "types/InputField";
import FormStatus from "components/form-status/FormStatus";
import Radio from "./Radio";
import "styles/components/input-field.css";

export default function InputRadio(item: InputField) {
  const { id, label, defaultValue, description, options } = item;

  // Safeguard
  if (!options)
    return <FormStatus status="error" message="No options available for this input type radio" />;

  // Components
  const Options = options.map((item) => (
    <Radio key={item.value} id={id} {...item} defaultValue={defaultValue} />
  ));

  return (
    <label className="input-field" data-testid="input-radio">
      <span className="label">{label}</span>
      {description && <small className="description">{description}</small>}
      <div className="radio-options">{Options}</div>
    </label>
  );
}
