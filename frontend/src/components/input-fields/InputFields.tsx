interface Props {
  fields: any[];
}

export default function InputFields({ fields }: Props) {
  if (fields.length === 0) return <small>No fields passed</small>;

  return <></>;
}
