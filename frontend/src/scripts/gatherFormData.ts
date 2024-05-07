// Project files
import InputField from "types/InputField";

export default function gatherFormData(fields: InputField[]): object {
  const names = fields.map((item) => item.name);

  // safeguards
  if (hasEmptyNames(names)) throw new Error("Fields has empty names");
  if (hasRepeatedNames(names)) throw new Error("Fields has repeated names");

  return {};
}

function hasRepeatedNames(array: any[]) {
  const set = new Set();
  return array.some((value) => set.size === set.add(value).size);
}

function hasEmptyNames(array: string[]) {
  return array.some((item) => item === "");
}

export function gatherFormData2(form: HTMLFormElement | null) {
  if (form === null) throw new Error("Invalid form");

  const formData = new FormData(form);
  const result = {};

  for (const [key, value] of formData) {
    result[key] = value;
  }

  return result;
}
