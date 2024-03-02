export default async function postCandidate(request, resolve, client) {
  // safeguard
  if (!request.body.candidate || typeof request.body.candidate !== "object") {
    resolve.send({ working: false });
    return;
  }

  const { candidate_name, candidate_job_title } = request.body.candidate;

  if (!candidate_name || !candidate_job_title) {
    resolve.send({ working: false });
    return;
  }

  try {
    await client.query(
      "INSERT INTO candidates(candidate_name, candidate_job_title) VALUES($1, $2)",
      [candidate_name, candidate_job_title]
    );
    resolve.send({ working: true });
  } catch (error) {
    console.error("PG ERROR", error);
    resolve.send({ working: false });
  }
}
