// Project files
import InputText from "components/input-text/InputText";
import TextArea from "components/input-textarea/TextArea";
import InputField from "types/InputField";

interface Props {
  fields: InputField[];
}

export default function InputFields({ fields }: Props) {
  if (fields.length === 0) return <small>No fields passed</small>;

  // Components
  const Fields = fields.map((item) => {
    const { name, type } = item;

    if (type === "input-text") return <InputText key={name} {...item} />;
    if (type === "text-area") return <TextArea key={name} {...item} />;
  });

  return <>{Fields}</>;
}
