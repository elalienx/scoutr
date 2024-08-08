
// Project files
import trimText from "../helpers/trimText.ts";

export default function candidateName(document:any, trimSize: number): string {
  const htmlText = document("h1").text();
  const result = trimText(htmlText, trimSize);

  return result;
}
