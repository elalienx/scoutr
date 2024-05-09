// Project files
import FetchOptions from "types/FetchOptions";
import ResultsAPI from "types/ResultsAPI";
import Status from "types/Status";

// prettier-ignore
export default async function fetchError(uri: string, init: FetchOptions): Promise<ResultsAPI> {
    const data:unknown[] =[];
    const status:Status = "error";
    const message = `The server could not return data from ${uri}`

    return { data, status, message }
}
