// Project files
import ImageThumbnail from "components/image-thumbnail/ImageThumbnail";
import "./item-candidate.css";

interface Props {
  /** Full name of the candidate. */
  candidate_image_url: string;

  /** The name of the candidate. */
  candidate_name: string;

  /** The job title of the candidate. */
  candidate_job_title: string;
}

/** Shows the personal details of a candidate. */
export default function ItemCandidate(item: Props) {
  const { candidate_image_url, candidate_name, candidate_job_title } = item;

  return (
    <div className="item-candidate">
      <ImageThumbnail src={candidate_image_url} profile="candidate" />
      <div className="content">
        <span className="title trim-text">{candidate_name}</span>
        <small className="label trim-text" title={candidate_job_title}>
          {candidate_job_title}
        </small>
      </div>
    </div>
  );
}
