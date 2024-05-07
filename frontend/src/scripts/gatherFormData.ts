type FormObject = Record<string, FormDataEntryValue>;

export default function gatherFormData(form: HTMLFormElement): FormObject {
  const formData = new FormData(form);
  const result: FormObject = {};
  let formDataSize = 0;

  for (const [name, value] of formData) {
    formDataSize++;
    result[name] = value;
  }

  // safeguard
  const resultSize = Object.keys(result).length;
  if (formDataSize !== resultSize) throw new Error("Fields has repeated names");

  return result;
}
