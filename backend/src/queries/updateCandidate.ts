/**
 * About:
 * This query is a function instead of a constant because is dynamic.
 *
 * Therefore:
 * 1. We don't known in advance what data we are going to receive.
 * 2. We need to verify if the data received belong in the Candidate table.
 *
 * Example good:
 * - data: { candidate_name: "Eduardo Alvarez", candidate_job_title: "Tech Lead" }
 *
 * Example: bad:
 * - data: { candidate_name: "Eduardo Alvarez", assignment_name: "Data Engineers" }
 * - error: assignment_name belongs to the Assignments table. As is the name of the
 *   project where we add canddiates.
 */

// Update we may no need to verify, let Posgres do it and return an error

export default function updateCandidate(id: number, data: any): string {
  const keys: string[] = Object.keys(data); // [ "candidate_name", "candidate_job_title" ]
  const parameters: string[] = keys.map((key, index) => `${key} = $${index + 1}`); // [ "candidate_name = $1", "candidate_job_title = $2" ]
  const clause: string = parameters.join(", "); // candidate_name = $1, candidate_job_title = $2

  return `UPDATE candidates SET ${clause} WHERE id = ${id} RETURNING *`;
}
