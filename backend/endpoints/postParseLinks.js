// Project files
import scrapLinkedIn from "../web_scrapper/scrapLinkedIn.js";

export default async function postParseLinks(request, resolve) {
  console.log("postParseLinks() request.body v6", request.body);

  // safeguard
  if (!request.body.links || !Array.isArray(request.body.links)) {
    console.warn("postParseLinks() safeguard has been triggered");
    resolve.send({ working: false });
    return;
  }

  const data = request.body.links;
  const result = [];

  for (const url of data) {
    const profile = await scrapLinkedIn(url);

    result.push(profile);
  }

  console.log(result);
}
