export default function textAreaToArray(value: FormDataEntryValue | null) {
  // Safeguard
  if (value === null) return [""];

  const contents = String(value);
  const newLineAndComma: RegExp = /[\n,]/;
  const result = contents
    .trim()
    .split(newLineAndComma)
    .map((item) => item.trim())
    .filter((item) => item !== "");

  return result;
}
