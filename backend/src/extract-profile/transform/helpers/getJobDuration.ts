export default function getJobDuration(text: string): string {
  // Properties
  const regex: RegExp = /[•·] (.*)$/;
  const match: RegExpMatchArray = text.match(regex);

  return match ? match[1] : "";
}
