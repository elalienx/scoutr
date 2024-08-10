// Project files
import ImageThumbnail from "components/image-thumbnail/ImageThumbnail";
import SampleImages from "cosmos/sample-images.json";

export default {
  "Candidate default": <ImageThumbnail src={SampleImages.candidate_eduardo} />,
  "Company default": <ImageThumbnail src={SampleImages.company_novare} />,
  "Candidate empty": <ImageThumbnail src={""} />,
  "Company empty": <ImageThumbnail src={""} />,
};
