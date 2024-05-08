// Project files
import InputText from "components/input-text/InputText";
import TextArea from "components/input-textarea/TextArea";
import InputField from "types/InputField";
import hasEmpyIds from "./helpers/hasEmptyIds";
import hasRepeatedIds from "./helpers/hasRepeatedIds";

interface Props {
  fields: InputField[];
}

export default function InputFields({ fields }: Props) {
  // Properties
  const ids = fields.map((item) => item.id);

  // Safeguards
  if (fields.length === 0) return <small>No fields passed</small>;
  if (hasEmpyIds(ids)) return <small>A field has an empty id</small>;
  if (hasRepeatedIds(ids)) return <small>A field has a repeated id</small>;

  // Components
  const Fields = fields.map((item) => {
    const { id, type } = item;

    if (type === "input-text") return <InputText key={id} {...item} />;
    if (type === "text-area") return <TextArea key={id} {...item} />;
  });

  return <>{Fields}</>;
}
