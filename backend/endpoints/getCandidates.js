export default async function getCandidates(resolve, client) {
  const data = await client.query("SELECT * FROM candidates");

  resolve.send(data);
}
