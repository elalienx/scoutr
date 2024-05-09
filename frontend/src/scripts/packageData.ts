type Method = "POST" | "UPDATE" | "DELETE";

export default function packageData(method: Method, body: object) {
  // Safeguard
  if (Object.keys(body).length === 0) throw new Error("Body is empty");

  return {
    headers: { "Content-Type": "application/json" },
    method: method,
    body: JSON.stringify(body),
  };
}
