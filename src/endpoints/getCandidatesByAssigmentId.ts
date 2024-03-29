export default async function getCandidatesByAssigmentId(request, response, database) {
  const { assignment_id } = request.params;
  const values = [assignment_id];
  const query = "SELECT * FROM candidates WHERE assignment_id = $1";

  try {
    const { rows } = await database.query(query, values);

    response.status(200).send(rows);
  } catch (error) {
    console.error(error);
    response.sendStatus(500);
  }
}
