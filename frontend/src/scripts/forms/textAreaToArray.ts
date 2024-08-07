/**
 * Example:
 * `
 *    www.eduardo.com
 * www.alexia.com,
 *
 * www.cecilia.com
 * `
 * Result: ["www.eduardo.com", "www.alexia.com", "www.cecilia.com"]
 */
export default function textAreaToArray(value: FormDataEntryValue | null) {
  // Safeguard
  if (value === null) return [""];

  const contents = String(value);
  const separatingSymbols: RegExp = /[\n, ]/;
  const result = contents
    .trim()
    .split(separatingSymbols)
    .filter((item) => item !== "");

  return result;
}
