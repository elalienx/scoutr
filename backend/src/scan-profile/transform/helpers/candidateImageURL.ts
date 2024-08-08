
// Project files
import verifyImage from "../helpers/verifyImage.ts";

export default function candidateImageURL(document:any): string {
  const cssSelector = ".EntityPhoto-circle-9 > img";
  const imageSource = document(cssSelector).attr("src");
  const result = verifyImage(imageSource);

  return result;
}
