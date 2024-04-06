export default function getDurationInMonths(durationInWords: string): number {
  const yearsRegex: RegExp = /(\d+)\s*(years?)/;
  const monthsRegex: RegExp = /(\d+)\s*(months?)/;
  const yearsMatch: RegExpMatchArray = durationInWords.match(yearsRegex);
  const monthsMatch: RegExpMatchArray = durationInWords.match(monthsRegex);
  let years: number = 0;
  let months: number = 0;

  if (yearsMatch) years = parseInt(yearsMatch[1]);
  if (monthsMatch) months = parseInt(monthsMatch[1]);

  return years * 12 + months;
}
