/**
 * Example:
 * `
 *    www.eduardo.com
 * www.alexia.net,
 *
 * www.cecilia.ec
 * `
 * Result: ["www.eduardo.com", "www.alexia.com", "www.cecilia.ec"]
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
