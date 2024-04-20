export default function getPrimaryJobTitle(text: string): string {
  const cutWords: RegExp = /,| at | på |@/i;
  const phrase = text.split(cutWords);
  const result = phrase[0].trim();

  return result;
}
