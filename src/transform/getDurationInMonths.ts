export default function getDurationInMonths(durationInWords: string): number {
  // safeguard
  if (durationInWords === "") return 0;

  const regex = /\d+/g;
  const [years, months] = (durationInWords.match(regex) || []).map(Number);

  return years * 12 + months;
}
