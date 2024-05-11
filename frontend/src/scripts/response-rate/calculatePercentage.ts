export default function calculatePercentage(ammount: number, total: number): number {
  // Safeguard
  if (ammount > total) throw new Error("Ammount cannot be bigger than total.");

  return Math.round((ammount / total) * 100) | 0;
}
