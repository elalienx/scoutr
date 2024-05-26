export default function getDurationInMonths(durationInWords: string): number {
  const yearsRegex: RegExp = /(\d+)\s*(years?)/;
  const monthsRegex: RegExp = /(\d+)\s*(months?)/;
  const yearsMatch: RegExpMatchArray = durationInWords.match(yearsRegex);
  const monthsMatch: RegExpMatchArray = durationInWords.match(monthsRegex);
  let years = 0;
  let months = 0;

  if (yearsMatch) years = Number.parseInt(yearsMatch[1]);
  if (monthsMatch) months = Number.parseInt(monthsMatch[1]);

  return years * 12 + months;
}
