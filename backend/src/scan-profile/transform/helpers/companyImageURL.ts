// Node modules
import { CheerioAPI } from "cheerio";

// Project files
import verifyImage from "./verifyImage";

export default function candidateImageURL(document: CheerioAPI): string {
  const cssSelector = "img"; // yes, is literally the first image from the HTML passed on document
  const imageSource = document(cssSelector).attr("src");
  const result = verifyImage(imageSource);

  return result;
}
