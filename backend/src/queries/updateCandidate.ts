/**
 * About:
 * This query is a function instead of a constant because is dynamic.
 * Therefore we don't known in advance what data we are going to receive.
 *
 * Example
 * - id = 1
 * - keys = ["candidate_name", "notes"]
 *
 * - parameters = ["candidate_name = $1", "notes = $2"]
 * - clause = "candidate_name = $1, notes = $2"
 */
export default function updateCandidate(id: number, keys: string[]): string {
  // Safeguard
  if (keys.length === 0) throw Error("Error: keys passed in empty");

  const parameters = keys.map((key, index) => `${key} = $${index + 1}`);
  const clause = parameters.join(", ");

  return `UPDATE candidates SET ${clause} WHERE id = ${id} RETURNING *`;
}
