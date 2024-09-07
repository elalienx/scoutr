// Project files
import ImageThumbnail from "components/image-thumbnail/ImageThumbnail";
import SampleImages from "cosmos/sample-images.json";

// Properties
const linkedInExpiredImage = `https://media.licdn.com/dms/image/v2/D4D35AQFr-eNSZy1iZA/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1719919653752?e=1724943600&v=beta&t=5laMa0ol_spB7uLKDiPPz3_c-UHVJWb2MS4oKupZXhA`;

export default {
  // 👨🏻 Candidate
  "Candidate default": <ImageThumbnail src={SampleImages.candidate_eduardo} profile="candidate" />,
  "Candidate empty": <ImageThumbnail src={""} profile="candidate" />,
  "Candidate expired image": <ImageThumbnail src={linkedInExpiredImage} profile="candidate" />,

  // 🏢 Company
  "Company default": <ImageThumbnail src={SampleImages.company_novare} />,
  "Company empty": <ImageThumbnail src={""} />,
  "Company expired image": <ImageThumbnail src={linkedInExpiredImage} />,
};
