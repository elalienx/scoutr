// Project files
import type FetchMethods from "types/FetchMethod";
import type FetchOptions from "types/FetchOptions";

function packageData(method: FetchMethods, body: object): FetchOptions {
  // Safeguard
  if (Object.keys(body).length === 0) throw new Error("Body is empty");

  return {
    headers: { "Content-Type": "application/json" },
    method: method,
    body: JSON.stringify(body),
  };
}

export default packageData;
