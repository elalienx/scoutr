export default function verifyProfileImage(imageURL: string): string {
  // Properties
  const placeholderURL = "data:image/gif;base64";

  return imageURL.includes(placeholderURL) ? "" : imageURL;
}
