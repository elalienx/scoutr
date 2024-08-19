/**
 *
 * @param text 1: "January 2015 to January 2020 • 5 years", text 2: "January 2023 to Present • 1 year 2 months"
 * @returns result 1: "5 years", result 2: "1 year 2 months"
 */
export default function extractJobDuration(text: string): string {
  // Properties
  const regex: RegExp = /[•·] (.*)$/;
  const match: RegExpMatchArray = text.match(regex);

  return match ? match[1] : text;
}
