import ResultsAPI from "types/ResultsAPI";

interface Payload {
  headers: { "Content-Type": "application/json" };
  method: "POST";
  body: string;
}

async function fetchPost(uri: string, payload: Payload): Promise<ResultsAPI> {
  let result: ResultsAPI = {
    data: {},
    message: "Could not connect to the backend server.",
    status: "error",
  };

  try {
    const response = await fetch(uri, payload);
    const json = await response.json();

    result = json;
    result.status = "ready";
  } catch (error) {
    console.error(error);
  }

  return result;
}

export default fetchPost;
