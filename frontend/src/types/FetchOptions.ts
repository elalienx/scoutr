// Project files
import type FetchMethods from "./FetchMethod";

export default interface FetchOptions {
  /** The headers of the REST API request. Scoutr only uses content in JSON format. */
  headers: { "Content-Type": "application/json" };

  /** The type of REST API request withouth counting the method GET. */
  method: FetchMethods;

  /** The data gathered from a form serialized as a JSON string. It can be decoded back using JSON.parse(). */
  body: string;
}
