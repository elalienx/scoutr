import ResultsAPI from "types/ResultsAPI";

async function fetchService(uri: string, options: object): Promise<ResultsAPI> {
  let result: ResultsAPI = {
    data: undefined,
    message: "Could not get data from the server",
    status: "error",
  };

  try {
    const request = await fetch(uri, options);
    const { data, status, message } = await request.json();

    result = { data, status, message };
  } catch (error) {
    console.log(error);
  }

  return result;
}

export default fetchService;