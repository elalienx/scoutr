// Node modules
import { CheerioAPI } from "cheerio";

// Project files
import verifyImage from "./verifyImage";

export default function candidateImageURL(document: CheerioAPI): string {
  const cssSelector = ".EntityPhoto-circle-9 > img";
  const imageSource = document(cssSelector).attr("src");
  const result = verifyImage(imageSource);

  return result;
}
