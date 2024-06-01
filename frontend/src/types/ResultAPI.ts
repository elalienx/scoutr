// Project files
import StatusPage from "./StatusPage";

export default interface ResultsAPI {
  /** Data fetched from the server can be anything from an array, object to a string. */
  data: any;

  /** Scoutr's backend always returns a nice, easy to understand message to know what happend in case of errors. */
  message: string;

  /** Returns the frontend current fetching status. */
  status: StatusPage;
}
