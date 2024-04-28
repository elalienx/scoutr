export default function textAreaToArray(value: string): string[] {
  const comma: RegExp = /,/g;
  const result = value
    .trim()
    .split("\n")
    .map((item) => item.replace(comma, ""))
    .map((item) => item.trim());

  return result;
}
