export default function stringArrayToURL(stringArray: string[]) {
  // Safeguard
  const error = "Cannot convert string to URL";

  if (stringArray.length === 0) throw new Error(error);

  // Properties
  const result = stringArray.map((item) => `links=${item}`).join("&");

  return result;
}
