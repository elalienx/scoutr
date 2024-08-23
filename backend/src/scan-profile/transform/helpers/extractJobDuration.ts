/**
 *
 * @param text: "January 2015 to February 2020 • 5 years 1 month"
 * @returns result: "5 years 1 month"
 */
export default function extractJobDuration(text: string): string {
  // Properties
  const regex: RegExp = /[•·] (.*)$/;
  const match: RegExpMatchArray = text.match(regex);

  return match ? match[1] : text;
}
