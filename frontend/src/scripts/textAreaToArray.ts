export default function textAreaToArray(value: string): string[] {
  const newLineAndComma: RegExp = /[\n,]/;

  const result = value
    .trim()
    .split(newLineAndComma)
    .map((item) => item.trim())
    .filter((item) => item !== "");

  return result;
}
