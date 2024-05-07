// Project files
import InputText from "components/input-text/InputText";
import TextArea from "components/input-textarea/TextArea";
import InputField from "types/InputField";
import hasEmptyNames from "./helpers/hasEmptyNames";
import hasRepeatedNames from "./helpers/hasRepeatedNames";

interface Props {
  fields: InputField[];
}

export default function InputFields({ fields }: Props) {
  // Properties
  const names = fields.map((item) => item.name);

  // Safeguards
  if (hasEmptyNames(names)) return <small>A field has an empty id</small>;
  if (hasRepeatedNames(names)) return <small>A field has a repeated id</small>;
  if (fields.length === 0) return <small>No fields passed</small>;

  // Components
  const Fields = fields.map((item) => {
    const { name, type } = item;

    if (type === "input-text") return <InputText key={name} {...item} />;
    if (type === "text-area") return <TextArea key={name} {...item} />;
  });

  return <>{Fields}</>;
}
