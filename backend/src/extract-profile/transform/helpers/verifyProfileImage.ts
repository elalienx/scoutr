/**
 *
 * @param imageURL "linked.com/eduardo/.jpg" or "data:feqiofwe"
 * @returns "linked.com/eduardo/.jpg" (because is a valid image url) or "" (because data:... is giberish does not return an image)
 */
export default function verifyProfileImage(imageURL: string | undefined): string {
  // Properties
  const placeholderURL = "data:image/gif;base64";

  // Safeguard
  if (imageURL === undefined) return "";

  return imageURL.includes(placeholderURL) ? "" : imageURL;
}
