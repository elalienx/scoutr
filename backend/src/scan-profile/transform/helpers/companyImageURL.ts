// Project files
import verifyImage from "../helpers/verifyImage.ts";

export default function candidateImageURL(document: any): string {
  const cssSelector = "img"; // yes, is literally the first image from the HTML passed on document
  const imageSource = document(cssSelector).attr("src");
  const result = verifyImage(imageSource);

  return result;
}
