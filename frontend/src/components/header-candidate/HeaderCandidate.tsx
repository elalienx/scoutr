// Project files
import ImageThumbnail from "components/image-thumbnail/ImageThumbnail";
import "./header-candidate.css";

interface Props {
  /** The unique indentifier of the candidate. */
  id: number;

  /** The name of the candidate. */
  candidate_image_url: string;

  /** The name of the company. */
  company_image_url: string;
}

/** A mobile component for table rows, styled to resemble a social media platform. */
export default function HeaderCandidate(item: Props) {
  const { id, candidate_image_url, company_image_url } = item;

  return (
    <header className="header-candidate">
      <ImageThumbnail
        src={candidate_image_url}
        className="candidate-image"
        alt="Candidate profile picture"
        profile="candidate"
      />
      <ImageThumbnail
        src={company_image_url}
        className="company-image"
        alt="Company logo"
      />
      <small className="label">Profile #{id}</small>
    </header>
  );
}
