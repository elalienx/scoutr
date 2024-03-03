export default async function postCandidate(request, resolve) {
  // safeguard
  if (!request.body.links !== "object") {
    resolve.send({ working: false });
    return;
  }

  const data = request.body.links;
  const result = [];

  console.log("postCandidate() links from the frontend", data);

  for (const url of data) {
    const profile = await scrapper(url);

    result.push(profile);
  }

  console.log(result);
}
