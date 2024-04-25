export default function monthsToYears(totalMonths: number): string {
  const monthsInAYear = 12;
  let years = 0;
  let months = 0;

  if (totalMonths < monthsInAYear) {
    months = totalMonths;
  } else {
    years = Math.floor(totalMonths / monthsInAYear);
    months = totalMonths % monthsInAYear;
  }

  return `${years}Y ${months}M`;
}
