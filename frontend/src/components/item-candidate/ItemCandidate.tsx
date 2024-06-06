// Project files
import ImageThumbnail from "components/image-thumbnail/ImageThumbnail";
import "./item-candidate.css";
import Candidate from "types/Candidate";

interface Props {
  /** Candidare data focused on personal information */
  candidate: Candidate;

  /** A click event to edit missing information. */
  onClick: Function;
}

/** Shows the personal details of a candidate. */
export default function ItemCandidate({ candidate, onClick }: Props) {
  const { candidate_image_url, candidate_name, candidate_job_title, linked_in_url } = candidate;

  return (
    <div className="item-candidate">
      <ImageThumbnail src={candidate_image_url} profile="candidate" />
      <div className="content">
        <a href={linked_in_url} className="title trim-text" target="_blank" rel="noreferrer">
          {candidate_name}
        </a>
        <small
          onClick={() => onClick("candidate_job_title")}
          className="label trim-text editable"
          title={candidate_job_title}
        >
          {candidate_job_title || "---"}
        </small>
      </div>
    </div>
  );
}
