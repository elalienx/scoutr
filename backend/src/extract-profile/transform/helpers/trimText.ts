export default function trimText(text: string | undefined | null, size: number = 0): string {
  // Safeguard
  if (text === undefined || text === null) return "";
  if (size === 0) return text; // if we dont have a size we just return the string unaffected

  return text.slice(0, size).trim();
}
