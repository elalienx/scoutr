// Project files
import HeaderCandidate from "components/header-candidate/HeaderCandidate";
import SampleImages from "cosmos/sample-images.json";

// Properties
const index = 1;

export default {
  Default: (
    <HeaderCandidate
      index={index}
      candidate_image_url={SampleImages.candidate_eduardo}
      company_image_url={SampleImages.company_novare}
    />
  ),
  "Only profile": (
    <HeaderCandidate
      index={index}
      candidate_image_url={SampleImages.candidate_eduardo}
      company_image_url={""}
    />
  ),
  "Only logo": (
    <HeaderCandidate
      index={index}
      candidate_image_url={""}
      company_image_url={SampleImages.company_novare}
    />
  ),
  Empty: <HeaderCandidate index={index} candidate_image_url={""} company_image_url={""} />,
};
