export default function calculatePercentage(ammount: number, total: number): number {
  // Safeguard
  if (ammount > total) throw new Error("Ammount cannot be bigger than total.");

  // Properties
  let result = -1; // start in the worst case scenario

  if (total > 0) result = Math.round((ammount / total) * 100);

  return result;
}
