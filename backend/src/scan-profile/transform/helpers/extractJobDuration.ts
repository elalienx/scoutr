/**
 *
 * @param text "January 2015 to January 2020 • 5 years" or "January 2023 to Present • 1 year 2 months"
 * @returns "5 years" and "1 year 2 months"
 */
export default function extractJobDuration(text: string): string {
  // Properties
  const regex: RegExp = /[•·] (.*)$/;
  const match: RegExpMatchArray = text.match(regex);

  return match ? match[1] : "";
}
