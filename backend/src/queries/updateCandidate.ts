/**
 * About:
 * This query is a function instead of a constant because is dynamic.
 * Therefore we don't known in advance what data we are going to receive.
 *
 * Example
 * - data = {candidate_name: "Eduardo", notes: "Very talented"}
 * - keys = ["candidate_name", "notes"]
 * - parameters = ["candidate_name = $1", "notes = $2"]
 * - clause = "candidate_name = $1, notes = $2"
 */
export default function updateCandidate(id: number, data: any): string {
  const keys = Object.keys(data); // [ "candidate_name", "notes" ]
  const parameters = keys.map((key, index) => `${key} = $${index + 1}`); // [ "candidate_name = $1", "notes = $2" ]
  const clause = parameters.join(", ");

  return `UPDATE candidates SET ${clause} WHERE id = ${id} RETURNING *`;
}
